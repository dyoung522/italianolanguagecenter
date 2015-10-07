import appConstants  from '../dispatcher/constants.jsx';
import AppDispatcher from '../dispatcher/dispatcher.jsx';
import { EventEmitter } from 'events';
import objectAssign  from 'object-assign';

var CHANGE_EVENT = 'change';

var _store = {
  sections: [
    { id: 1, name: 'classes' },
    { id: 2, name: 'events' },
    { id: 3, name: 'more' }
  ]
};

var addItem = function(data) {
  _store.sections.push(data);
};

var updateItem = function(data) {
  var idx = _store.sections.indexOf({ id: data.id });
  _store.sections[idx] = data;
};

var removeItem = function(data) {
  var idx = _store.sections.indexOf({ id: data.id });
  _store.sections.splice(idx, 1);
};

var sectionStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener: function(cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  getList: function() {
    return _store.sections;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch ( action.actionType ) {
    case appConstants.ADD_SECTION:
      addItem(action.data);
      sectionStore.emit(CHANGE_EVENT);
      break;
    case appConstants.UPDATE_SECTION:
      updateItem(action.data);
      sectionStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_SECTION:
      removeItem(action.data);
      sectionStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default sectionStore;
