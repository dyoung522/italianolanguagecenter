var React = require('react');

module.exports = React.createClass({
  propTypes: {
    section: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <h1 className="title">{I18n.t('menu.' + this.props.section.name)}</h1>
    )
  }
});
