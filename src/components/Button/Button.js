import React from 'react';
import './style.css';

const Button = (props) => {
  const { text, onClick, color, backgroundColor } = props;
  return (
    <button onClick={onClick} style={{ color, backgroundColor }}>
      {text}
    </button>
  );
};

export default Button;
