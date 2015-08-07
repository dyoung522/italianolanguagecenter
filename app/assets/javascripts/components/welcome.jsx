var Welcome = React.createClass({
  renderIntroduction: function() {
    var key = 0;
    return (
      I18n.t('introduction').map( function(line) {
        return <p key={key++}>{line}</p>
      })
    )
  },

  render: function() {
    return (
      <div className="col-md-8 col-md-offset-4 text-center">
        <h1>{I18n.t('welcome')}</h1>
        <h2>{I18n.t('tagline')}</h2>
        <h3>{this.renderIntroduction()}</h3>
      </div>
    )
  }
});
