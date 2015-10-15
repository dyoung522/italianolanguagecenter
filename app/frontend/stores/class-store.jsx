import appConstants  from '../dispatcher/constants.jsx';
import AppDispatcher from '../dispatcher/dispatcher.jsx';
import objectAssign  from 'object-assign';
import { EventEmitter } from 'events';

var CHANGE_EVENT = 'change';

var _store = {
  classes: [
    { id: 1, key: 'beginner',     starts: '2016-01-02' },
    { id: 2, key: 'intermediate', starts: '2016-02-01' },
    { id: 3, key: 'advanced',     starts: '2016-03-01' }
  ]
};

var addItem = function(data) {
  _store.classes.push(data);
};

var updateItem = function(data) {
  var idx = _store.classes.indexOf({ id: data.id });
  _store.classes[idx] = data;
};

var removeItem = function(data) {
  var idx = _store.classes.indexOf({ id: data.id });
  _store.classes.splice(idx, 1);
};

var classStore = objectAssign({}, EventEmitter.prototype, {
  addChangeListener:    function(cb) {
    this.on(CHANGE_EVENT, cb);
  },
  removeChangeListener: function(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },
  getList:              function() {
    return _store.classes;
  }
});

AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch ( action.actionType ) {
    case appConstants.ADD_CLASS:
      addItem(action.data);
      classStore.emit(CHANGE_EVENT);
      break;
    case appConstants.UPDATE_CLASS:
      updateItem(action.data);
      classStore.emit(CHANGE_EVENT);
      break;
    case appConstants.REMOVE_CLASS:
      removeItem(action.data);
      classStore.emit(CHANGE_EVENT);
      break;
    default:
      return true;
  }
});

export default classStore;
