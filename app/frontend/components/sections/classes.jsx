import classStore from '../../stores/class-store.jsx';
import Class      from './class.jsx';
import React      from 'react';

export default React.createClass({

  getInitialState: function() {
    return { data: classStore.getList() };
  },

  componentDidMount: function() {
    classStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    classStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      data: classStore.getList()
    })
  },

  _renderClass: function(c) {
    var classKey = 'class_' + c.id;

    return (
      <article key={c.id} id={classKey} className="classes">
        <Class data={c} />
      </article>
    )
  },

  render: function() {
    return (
      <div>
        {this.state.data.map(c => this._renderClass(c))}
      </div>
    )
  }
});

