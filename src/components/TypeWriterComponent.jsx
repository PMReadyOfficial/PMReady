import React from 'react';
import { Typewriter } from 'react-type-animation';

const TypewriterComponent = () => {
  return (
    <Typewriter>
      {({ type }) => (
        <>
          {type('Product').delay(500).reset()}
        </>
      )}
    </Typewriter>
  );
};

export default TypewriterComponent;
