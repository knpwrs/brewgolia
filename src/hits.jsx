import React from 'react';
import { Div } from 'glamorous';
import { arrayOf } from 'prop-types';
import { connectHits } from 'react-instantsearch/connectors';
import Hit from './hit';
import hitShape from './shapes/hit';

const Hits = ({ hits }) => (
  <Div display="flex" flexDirection="column">
    {hits.map(hit => <Hit key={hit.objectID} hit={hit} />)}
  </Div>
);

Hits.propTypes = {
  hits: arrayOf(hitShape).isRequired,
};

export default connectHits(Hits);
