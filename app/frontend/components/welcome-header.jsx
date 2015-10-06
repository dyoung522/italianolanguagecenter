var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <section id="welcome-header" className="welcome-header-section jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{I18n.t('header.welcome', { locale: 'en' })}</h1>
              <h1>{I18n.t('header.welcome', { locale: 'it' })}</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
});
