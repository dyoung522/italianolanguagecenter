var React = require('react');

var Introduction = React.createClass({
  renderIntroduction: function() {
    var key = 0;
    return (
      I18n.t('introduction').map(function(line) {
        return <p key={key++}>{line}</p>
      })
    )
  },

  render: function() {
    return (
      <div id="intro" className="intro">
        <div className="col-md-8 text-center intro-home">
          <h2>
            {I18n.t('header.tagline', { locale: 'en' })}
            &nbsp;
            {I18n.t('header.tagline', { locale: 'it' })}
          </h2>

          <h3>{this.renderIntroduction()}</h3>
        </div>
      </div>
    )
  }
});

module.exports = Introduction;
