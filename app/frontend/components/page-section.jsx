import Classes from './sections/classes.jsx';
import React   from 'react';

export default React.createClass({
  propTypes: {
    section: React.PropTypes.object.isRequired
  },

  renderSection: function() {

    switch ( this.props.section.name ) {
      case 'classes':
        console.log('rendering classes');
        return (<Classes />);
        break;
      default:
        console.warn('Unknown section being rendered', this.props.section);
    }
  },

  render: function() {
    return (
      <div>
        <div className="col-sm-6 col-md-offset-3">
          <div className="col-sm-12">
            <h1 className="page-section-title">{I18n.t('menu.' + this.props.section.name)}</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className={'col-sm-12 page-section-section' + this.props.section.name + '-section'}>
              {this.renderSection()}
            </div>
          </div>
        </div>
      </div>
    )
  }
});
