import React from 'react';
import { shape, string } from 'prop-types';

const Hit = ({ hit }) => (
  <span>
    {hit.name} - {hit.desc} - {hit.homepage}
  </span>
);

Hit.propTypes = {
  hit: shape({
    name: string.isRequired,
    desc: string.isRequired,
    homepage: string.isRequired,
  }).isRequired,
};

export default Hit;
