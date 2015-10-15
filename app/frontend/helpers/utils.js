import _     from 'lodash';
import React from 'react';

export function stringToHtml(message) {
  var key = 0;
  return _.isArray(message) ? message.map(line => { return <p key={key++}>{line}</p> }) : message
}
