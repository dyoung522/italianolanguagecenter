var Welcome = React.createClass({
  render: function() {
    return (
      <section id="welcome" className="welcome-section jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>{I18n.t('welcome', {locale: 'en'})}</h1>
              <h1>{I18n.t('welcome', {locale: 'it'})}</h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
});
