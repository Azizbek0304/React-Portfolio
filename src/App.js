import React from 'react';
import Header from './componets/Header';
import './style.css';

export default function App() {
  const clickBtn = () => {
    alert('you Clicked motherFucker');
  };
  return (
    <div>
      <button onClick={clickBtn}>hello motherFucker</button>
      <Header />
    </div>
  );
}
