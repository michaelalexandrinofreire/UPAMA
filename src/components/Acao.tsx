"use client"
import React, { useState } from 'react';
import styles from '../style/acoes.module.css'
import { title } from 'process';

interface TextoParcialProps {
  texto: string;
  title: string;
  imgSrc: string;
  altImg: string;
}

const TextoParcial: React.FC<TextoParcialProps> = ({ texto, title, imgSrc, altImg }) => {
  const [mostrarTextoCompleto, setMostrarTextoCompleto] = useState(false);
  const textoParcial = texto ? texto.slice(0, texto.length / 2) : '';

  const handleClick = () => {
    setMostrarTextoCompleto(!mostrarTextoCompleto);
  };

  return (
    <div>
      {mostrarTextoCompleto ? (
        <div className={styles.acao}>
          <img src={imgSrc} alt={altImg} />
          <h3>{title}</h3>
          <p>{texto}</p>
          <button onClick={handleClick} className={styles.button}>Leia Menos</button>
        </div>
      ) : (
        <div className={styles.acao}>
          <img src={imgSrc} alt={altImg} />
          <h3>{title}</h3>
          <p>{textoParcial}</p>
          <button onClick={handleClick} className={styles.button}>Leia Mais</button>
        </div>
      )}
    </div>
  );
};

export default TextoParcial;
