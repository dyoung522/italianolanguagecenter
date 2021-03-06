import PageSection  from './page-section.jsx';
import React        from 'react';
import sectionStore from '../stores/section-store.jsx';

export default React.createClass({

  getInitialState: function() {
    return { data: sectionStore.getList() };
  },

  componentDidMount: function() {
    sectionStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    sectionStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      data: sectionStore.getList()
    })
  },

  _renderSection: function(section) {
    return (
      <section key={section.id} id={section.name} className={[section.name + '-section', 'page-section'].join(' ')}>
        <PageSection section={section}/>
      </section>
    )
  },

  render: function() {
    return (
      <div>
        {this.state.data.map(s => this._renderSection(s))}
      </div>
    )
  }
});

