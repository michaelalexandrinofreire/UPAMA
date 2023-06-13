"use client";
import React, { useState } from 'react';
import style from '../style/globals.module.css';


export default function Values() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  function handleButtonClick(index: number) {
    setSelectedButton(index);
  }

  return (
    <div className={style.valuesContainer}>
      <h2>Escolha um valor</h2>
      <div className={style.values}>
        <button
          className={`${style.value} ${
            selectedButton === 0 ? style.selectedButton : ''
          }`}
          onClick={() => handleButtonClick(0)}
        >
          $ 15,00
        </button>
        <button
          className={`${style.value} ${
            selectedButton === 1 ? style.selectedButton : ''
          }`}
          onClick={() => handleButtonClick(1)}
        >
          $ 25,00
        </button>
        <button
          className={`${style.value} ${
            selectedButton === 2 ? style.selectedButton : ''
          }`}
          onClick={() => handleButtonClick(2)}
        >
          $ 35,00
        </button>
        <button
          className={`${style.value} ${
            selectedButton === 3 ? style.selectedButton : ''
          }`}
          onClick={() => handleButtonClick(3)}
        >
          $ 55,00
        </button>
      </div>
      <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
        <button className={style.buttonContinue}>Continuar</button>
      </a>
    </div>
  );
}
