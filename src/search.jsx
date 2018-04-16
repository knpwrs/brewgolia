import React from 'react';
import { InstantSearch } from 'react-instantsearch/dom';
import { Div } from 'glamorous';
import SearchInput from './search-input';
import Hits from './hits';

export default () => (
  <InstantSearch
    appId={process.env.ALGOLIA_APP_ID}
    apiKey={process.env.ALGOLIA_API_KEY}
    indexName={process.env.ALGOLIA_INDEX}
  >
    <Div display="flex" justifyContent="center">
      <SearchInput />
    </Div>
    <Hits />
  </InstantSearch>
);
