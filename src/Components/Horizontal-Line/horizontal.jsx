import React from 'react';

const Horizontal = ({ height }) => {
  return (
    <div
      style={{
        justifyContent:'center',
        alignItems: 'center',
        height: `${height}px`,
        backgroundColor: '#000',
        // margin: '0 11.5%'
        // Add any other styles or content you want to include
      }}
    />
  );
};

export default Horizontal;