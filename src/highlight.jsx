import React from 'react';
import glamorous from 'glamorous';
import { string, func } from 'prop-types';
import { connectHighlight } from 'react-instantsearch/connectors';
import hitShape from './shapes/hit';

const makeKey = (i, value) => `part-${i}-${value}`;

const Mark = glamorous.mark({
  background: 'transparent',
  color: 'inherit',
  fontWeight: 'bold',
  textDecoration: 'underline',
});

const Highlight = ({ highlight, attribute, hit }) => {
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return highlights.map((part, i) => (part.isHighlighted ? (
    <Mark key={makeKey(i, hit[attribute][i])}>{part.value}</Mark>
  ) : (
    <span key={makeKey(i, hit[attribute][i])}>{part.value}</span>
  )));
};

Highlight.propTypes = {
  hit: hitShape.isRequired,
  attribute: string.isRequired,
  highlight: func.isRequired,
};

export default connectHighlight(Highlight);
