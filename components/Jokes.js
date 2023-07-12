import React from 'react';
import PropTypes from 'prop-types';

export default function Jokes({ joke, btnText }) {
  return (
    <>
      <h1 style={{ color: 'darkblue' }}>{joke.setup}</h1>
      <h1 style={{ color: 'white' }}>{btnText !== 'Get Punchline' ? joke.punchline : ''}</h1>
    </>
  );
}

Jokes.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
