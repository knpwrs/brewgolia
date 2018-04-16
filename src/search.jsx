import React from 'react';
import {
  InstantSearch,
  SearchBox,
} from 'react-instantsearch/dom';
import { Div } from 'glamorous';
import Hits from './hits';

export default () => (
  <InstantSearch
    appId={process.env.ALGOLIA_APP_ID}
    apiKey={process.env.ALGOLIA_API_KEY}
    indexName={process.env.ALGOLIA_INDEX}
  >
    <Div display="flex" justifyContent="center">
      <SearchBox />
    </Div>
    <Hits />
  </InstantSearch>
);
