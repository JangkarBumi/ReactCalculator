import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <div id="display">
      <h1>{result}</h1>
    </div>
  );
};

Display.propTypes = {
  result: PropTypes.string,
};



export default Display;
