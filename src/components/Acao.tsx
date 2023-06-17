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
  
  const handleButtonClick = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={styles.acao}>
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <div>
        <p>{description}</p>
        {showDescription && <p className={styles.otherDescription}>{otherDescription}</p>}
      </div>
      <button className={styles.button} onClick={handleButtonClick}>Leia Mais</button>
      
    </div>
  );
}