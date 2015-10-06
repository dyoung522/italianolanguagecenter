var PageSection  = require('components/page-section'),
    React        = require('react'),
    sectionStore = require('stores/section-store');

module.exports = React.createClass({

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
    console.log('Rendering', section);
    return (
      <section key={section.id} id={section.name} className={[section.name + '-section', 'page-section'].join(' ')}>
        <div className="col-sm-6 col-md-offset-3">
          <div className="col-sm-12">
            <PageSection section={section}/>
          </div>
        </div>
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

