var Introduction = require('components/introduction'),
    React        = require('react');

var Welcome = React.createClass({
  renderWelcome: function() {
    var key = 0;
    return (
      I18n.t('welcome.message').map(function(line) {
        return <p key={key++}>{line}</p>
      })
    )
  },

  render: function() {
    return (
      <section className="welcome-section">
        <div className="container">
          <div className="row">
            <Introduction />
          </div>
          <div id="welcome" className="row">
            <div className="welcome">
              <h2 className="text-center">{I18n.t('welcome.header', { locale: 'en' })}</h2>

              <h3>{this.renderWelcome()}</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = Welcome;

