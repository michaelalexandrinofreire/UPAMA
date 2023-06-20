"use client"
import { useState } from 'react';
import styles from '../style/acoes.module.css'

interface AcaoProps {
  title: string;
  description: string;
  imageSrc: string;
  otherDescription: String;
}

export default function Acao({ title, description, imageSrc, otherDescription }: AcaoProps) {
  const [showDescription, setShowDescription] = useState(false);
  const  [handleTitle, setHundleTitle] = useState('Ler Mais');

  function handleButtonClick(){
    setShowDescription(!showDescription);
    setHundleTitle(showDescription ? 'Ler Mais' : 'Ler Menos');
  };

  return (
    <div className={styles.acao}>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        {showDescription && <p className={styles.otherDescription}>{otherDescription}</p>}
      </div>
      <button className={styles.button} onClick={handleButtonClick}>{handleTitle}</button>
      
    </div>
  );
}