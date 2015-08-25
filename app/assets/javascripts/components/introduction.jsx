var React = require('react');

var Introduction = React.createClass({
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
      <section id="intro" className="intro-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 text-center intro-home">
              <h2>
                {I18n.t('tagline', {locale: 'en'})}
                &nbsp;
                {I18n.t('tagline', {locale: 'it'})}
              </h2>
              <h3>{this.renderIntroduction()}</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

module.exports = Introduction;
