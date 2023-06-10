'use client'
import { useState, useEffect } from 'react';
import styles from '../style/Slide.module.css';
import Button from './Button';

export default function Slide() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];

  const handlePrevSlide = () => {
    setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
  };

  const handleNextSlide = () => {
    setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.slideContainer}>
      <img src={images[currentImage]} alt="Slide" className={styles.slideImage} />
      <div className={styles.overlay}>
        <h2 className={styles.titulo}>Torne-se um aliado do meio ambiente</h2>
        <div style={{ marginBottom: '55.7px', marginLeft: '65px' }}>
          <Button href="/doacao" text="Doe agora"/>
        </div>
      </div>
      <div className={styles.navigation}>
        <button className={styles.prevButton} onClick={handlePrevSlide}>
          &lt;
        </button>
        <button className={styles.nextButton} onClick={handleNextSlide}>
          &gt;
        </button>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentImage === index ? styles.activeDot : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
