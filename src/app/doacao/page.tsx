"use client"
import { SetStateAction, useState } from 'react';
import style from '../doacao/style/globals.module.css'
import ResumeDoacao from "./components/ResumeDoacao";
import Values from './components/Values';
import Pix from './components/Pix';


export default function PaginaDoacao() {
  //variáveis e funções da página:
  const [valorTotal, setValorTotal] = useState('')

  //variáveis e funções de FormasDoacao:
  const [buttonBgCartao, setButtonBgCartao] = useState('');
  const [buttonBgBoleto, setButtonBgBoleto] = useState('');
  const [buttonBgPix, setButtonBgPix] = useState('');
  
  const [svgFillCartao, setsvgFillCartao] = useState('');
  const [svgFillBoleto, setsvgFillBoleto] = useState('');
  const [svgFillPix, setsvgFillPix] = useState('');

  const [mostrarValores, setMostrarValores] = useState(false);
  const [mostrarPix, setMostrarPix] = useState(false);

  function handleClickCartao() {
    function mostraValorCartao(){
      setMostrarValores(true);
      setMostrarPix(false);
    }
    function handleButtonBgCartao() {
      setButtonBgCartao('#2EB431');
      setButtonBgBoleto('white');
      setButtonBgPix('white');
    }
    function hundleFillCartao(){
      setsvgFillCartao('white');
      setsvgFillBoleto('black');
      setsvgFillPix('black');
    }
    return mostraValorCartao(), handleButtonBgCartao(), hundleFillCartao();
  };

  function handleClickBoleto() {
    function mostraValorBoleto(){
      setMostrarValores(true);
      setMostrarPix(false);
    }
    function handleButtonBgBoleto() {
      setButtonBgCartao('white');
      setButtonBgBoleto('#2EB431');
      setButtonBgPix('white');
    }
    function hundleFillBoleto(){
      setsvgFillCartao('black');
      setsvgFillBoleto('white');
      setsvgFillPix('black');
    }
    return mostraValorBoleto(), handleButtonBgBoleto(), hundleFillBoleto();
  };

  function handleClickPix(){
    function mostrarPix(){
      setMostrarPix(true);
      setMostrarValores(false);
    }
    function handleButtonBgPix() {
      setButtonBgCartao('white');
      setButtonBgBoleto('white');
      setButtonBgPix('#2EB431');
    }
    function hundleFillPix(){
      setsvgFillCartao('black');
      setsvgFillBoleto('black');
      setsvgFillPix('white');
    }
    return mostrarPix(), handleButtonBgPix(), hundleFillPix()
  }

  return (
    <main className={style.mainDoacao}>
      <h1>Doação</h1>
      <div className={style.containerDoacao}>
        <section>
        <div className={style.formasContainer}>
      <h2>Escolha uma forma de doação</h2>
      <div className={style.formasDoacao}>
        <div className={style.forma}>
          <button className={style.svg}
            onClick={handleClickCartao}
            style={{ background: buttonBgCartao }}>
            <svg style={{fill: svgFillCartao}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
              <path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" />
            </svg>
          </button>
          <h3>Cartão de crédito</h3>
        </div>
        <div className={style.forma}>
          <button className={style.svg}
            onClick={handleClickBoleto}
            style={{background: buttonBgBoleto}}>
            <svg style={{fill: svgFillBoleto}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
              <path d="M24 32C10.7 32 0 42.7 0 56V456c0 13.3 10.7 24 24 24H40c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H24zm88 0c-8.8 0-16 7.2-16 16V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16zm72 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H184zm96 0c-13.3 0-24 10.7-24 24V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H280zM448 56V456c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24H472c-13.3 0-24 10.7-24 24zm-64-8V464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
            </svg>
          </button>
          <h3>Boleto Bancário</h3>
        </div>
        <div className={style.forma}>
          <button className={style.svg}
            onClick={
              handleClickPix}
              style={{ background: buttonBgPix }}>
            <svg style={{fill: svgFillPix}} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80zM64 96v64h64V96H64zM0 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V336zm64 16v64h64V352H64zM304 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm80 64H320v64h64V96zM256 304c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16s7.2 16 16 16h32c8.8 0 16-7.2 16-16s7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s-7.2-16-16-16s-16 7.2-16 16v64c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V304zM368 480a16 16 0 1 1 0-32 16 16 0 1 1 0 32zm64 0a16 16 0 1 1 0-32 16 16 0 1 1 0 32z" />
            </svg>
          </button>
          <h3>Pix</h3>
        </div>
      </div>
      {mostrarValores && <Values valorTotal={valorTotal} setValorTotal={setValorTotal}/>}
      {mostrarPix && <Pix/>}
    </div>
        </section>
        <section className={style.sectionResume}>
          <ResumeDoacao valorTotal={valorTotal}/>
        </section> 
      </div>
  </main>

  );
}