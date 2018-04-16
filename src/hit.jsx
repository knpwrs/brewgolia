import React from 'react';
import { Div, A, Span } from 'glamorous';
import hitShape from './shapes/hit';
import Highlight from './highlight';

const Hit = ({ hit }) => (
  <Div height="30px" display="flex" alignItems="center">
    <Span width="35%">
      <A
        href={hit.homepage}
        fontSize="1.4em"
        color="inherit"
        textDecoration="none"
        css={{ ':hover': { textDecoration: 'underline' } }}
      >
        <Highlight hit={hit} attribute="name" />
      </A>
    </Span>
    <Span width="20%" fontSize="0.8em">
      {hit.versions.stable}
    </Span>
    <Span flexGrow="1" fontSize="0.8em">
      <Highlight hit={hit} attribute="desc" />
    </Span>
  </Div>
);

Hit.propTypes = {
  hit: hitShape.isRequired,
};

export default Hit;
