import React from 'react';

const ChangeDegrees = () => {
  const degreesToggle = () => {};
  return (
    <button className="changeDegrees">
      <button className="celcius" onClick={degreesToggle}>
        C
      </button>
      <div>/</div>
      <button className="fahrenheit" onClick={degreesToggle}>
        F
      </button>
    </button>
  );
};

export default ChangeDegrees;
