import React from 'react';
import './style.css';

export default function App() {
  const clickBtn = () => {
    alert('you Clicked motherFucker');
  };
  return (
    <div>
      <button onClick={clickBtn}>hello motherFucker</button>
    </div>
  );
}
