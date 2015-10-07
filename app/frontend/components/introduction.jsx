import React from 'react';
import { stringToHtml } from '../helpers/utils';

var Introduction = React.createClass({
  render: function() {
    return (
      <div id="intro" className="intro">
        <div className="col-md-8 text-center intro-home">
          <h2>
            {I18n.t('header.tagline', { locale: 'en' })}
            &nbsp;
            {I18n.t('header.tagline', { locale: 'it' })}
          </h2>
          <h3>{stringToHtml(I18n.t('introduction'))}</h3>
        </div>
      </div>
    )
  }
});

export default Introduction;
