// FancyText Component
import React from 'react';
import './FancyText.css';

function FancyText({ type, text }) {
  const className = type === 'title' ? 'fancy-title' : 'fancy-regular';
  return <div className={className}>{text}</div>;
}

export default FancyText;
