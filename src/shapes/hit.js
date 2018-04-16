import { shape, string } from 'prop-types';

export default shape({
  name: string.isRequired,
  desc: string.isRequired,
  homepage: string.isRequired,
});

