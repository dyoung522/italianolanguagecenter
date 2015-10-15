import Introduction from './introduction.jsx';
import React        from 'react';
import { stringToHtml } from '../helpers/utils';

var Welcome = React.createClass({
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
              <h3>{stringToHtml(I18n.t('welcome.message'))}</h3>
            </div>
          </div>
        </div>
      </section>
    )
  }
});

export default Welcome;

