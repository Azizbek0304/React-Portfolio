import React from 'react';
import AnimCursor from 'react-animated-cursor';

function AnimatedCursor() {
  return (
    <AnimCursor
      innerSize={8}
      outerSize={30}
      color="95, 105, 103"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={2}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
      ]}
    />
  );
}

export default AnimatedCursor;
