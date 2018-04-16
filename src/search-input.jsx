import React from 'react';
import { func } from 'prop-types';
import { compose, withHandlers } from 'recompose';
import { Input } from 'glamorous';
import { connectSearchBox } from 'react-instantsearch/connectors';

const SearchInput = ({ onChange }) => (
  <Input
    onChange={onChange}
    placeholder="Search"
    fontSize="1.3em"
    background="rgba(0,0,0,0.3)"
    color="#FFF"
    border="0"
    borderRadius="0.4em"
    padding="0.2em 1em"
    outline="none"
  />
);

SearchInput.propTypes = {
  onChange: func.isRequired,
};

export default compose(
  connectSearchBox,
  withHandlers({
    onChange: ({ refine }) => ({ target }) => refine(target.value),
  }),
)(SearchInput);
