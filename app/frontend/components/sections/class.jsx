import React            from 'react';
import moment           from 'moment';
import { stringToHtml } from '../../helpers/utils';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  i18nKey: function() {
    return 'classes.' + this.props.data.key
  },

  beginsOn: function() {
    return I18n.t('classes.begin') + ': ' + moment(this.props.data.starts).locale(I18n.locale).format('LL')
  },

  render: function() {
    var key = this.i18nKey();

    return (
      <div className="class">
        <span className="starts">{this.beginsOn()}</span>
        <span className="title">{I18n.t(key + '.title')}</span>
        <span className="description">{stringToHtml(I18n.t(key + '.description'))}</span>
        <span className="recommended">{I18n.t(key + '.recommended')}</span>
      </div>
    )
  }
});

