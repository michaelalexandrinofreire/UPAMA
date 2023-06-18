"use client";
import React, { useState } from 'react';
import style from '../style/globals.module.css';

export default function Values() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [linkHref, setLinkHref] = useState('');
  const [botaoClicado, setBotaoClicado] = useState(false);

    function setLinkUm () {
      setLinkHref('https://sacola.pagseguro.uol.com.br/0ad3545a-8ad1-4423-9443-77d17253b792');
      setBotaoClicado(true);
    };
    function setLinkDois () {
      setLinkHref('https://sacola.pagseguro.uol.com.br/caf6562d-0152-4517-9833-39d26399185e');
      setBotaoClicado(true);
    };
    function setLinkTres () {
      setLinkHref('https://sacola.pagseguro.uol.com.br/5234f51e-fe22-4b88-8c92-54f3e239186e');
      setBotaoClicado(true);
    };
    function setLinkQuatro () {
      setLinkHref('https://sacola.pagseguro.uol.com.br/6a8d426e-c6ae-4e33-9e7c-c096069a2402');
      setBotaoClicado(true);
    };

    function handleButtonClick(index: number) {
      setSelectedButton(index);
    };

  return (
    <div className={style.valuesContainer}>
      <h2>Escolha um valor</h2>
      <div className={style.values}>
        <button
          className={`${style.value} ${
            selectedButton === 0 ? style.selectedButton : ''
          }`}
          onClick={() => {handleButtonClick(0); setLinkUm()}}
        >
          $ 15,00
        </button>
        <button
          className={`${style.value} ${
            selectedButton === 1 ? style.selectedButton : ''
          }`}
          onClick={() =>{ handleButtonClick(1); setLinkDois()}}
        >
          $ 25,00
        </button>
        <button
          className={`${style.value} ${
            selectedButton === 2 ? style.selectedButton : ''
          }`}
          onClick={() =>{ handleButtonClick(2); setLinkTres();}}
        >
          $ 35,00
        </button>
        <button
          className={`${style.value} ${
            selectedButton === 3 ? style.selectedButton : ''
          }`}
          onClick={() => {handleButtonClick(3); setLinkQuatro();}}
        >
          $ 55,00
        </button>
      </div>
      
      {botaoClicado ? (
        <div className={style.containerContinuar}>
          <a className={style.link} href={linkHref} target="_blank">
            <button className={style.buttonContinue}>Continuar</button>
          </a>
          <span>* Sua doação será processada pelo PagBank</span>
        </div>
      ) : (
        <div className={style.containerContinuar}>
          <button disabled className={style.buttonContinueDisabled}>Continuar</button>
          <span>* Selecione algum valor</span>
        </div>
        
        
      )}
    </div>
  );
}
