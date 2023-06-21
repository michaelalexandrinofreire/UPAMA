"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styles from '../style/navMenuMobile.module.css'

export default function NavBarMobile(){
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle(){
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.menuClose}>
      <div className={styles.logo}>
        <img src="/images/favicon.ico" alt="logo da UPAMA" />
      </div>
      <div className={styles.instituicao}>
        Instituição UPAMA
      </div>
      
      {isOpen ? (
        <div className={styles.menuMobile}>
          <nav>
            <ul className={styles.ul}>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li >
                <a href="/quemsomos">Quem Somos</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/contatos">Contato</a>
              </li>
              <li>
                <a href="/doacao">Doe Agora</a>
              </li>
            </ul>
          </nav>
          <FaTimes onClick={handleMenuToggle} style={{'color': '#3fe442'}}/>
        </div>
      ) : (
        <FaBars onClick={handleMenuToggle}style={{'fontSize': '32px', 'color': '#2EB431'}}/>
      )}
    </header>
  );
};
