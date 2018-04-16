import React from 'react';
import glamorous, {
  Div,
  H1,
  H2,
  P,
} from 'glamorous';
import Search from './search';

const Link = glamorous.a({
  color: 'inherit',
  textDecoration: 'none',
  fontWeight: 'bold',
  ':hover': {
    textDecoration: 'underline',
  },
});

export default () => (
  <Div width="960px">
    <H1
      fontSize="5em"
      fontWeight="900"
      textAlign="center"
    >
      Formulae
    </H1>
    <H2
      fontSize="2em"
      textAlign="center"
    >
      Package Listing
    </H2>
    <P textAlign="center">
      This is a listing of all packages available via the Homebrew package manager for macOS.
    </P>
    <Search />
    <P textAlign="center" margin="2em 0">
      Brewgolia was created by <Link href="https://knpw.rs">Ken Powers</Link>.
      Powered by <Link href="https://www.algolia.com/">Algolia</Link>.
      View source code on <Link href="https://github.com/knpwrs/brewgolia">Github</Link>.
    </P>
  </Div>
);
