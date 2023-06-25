"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/Fa';
import{ BiHomeAlt2 } from 'react-icons//bi'
import styles from '../style/navMenuMobile.module.css'

export default function NavBarMobile(){
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle(){
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.menuClose}>
      
      {isOpen ? (
        <div className={styles.menuMobile}>
          <nav>
            <ul className={styles.ul}>
              <li className={styles.home}>
                <a href="/" ><div>Página Inicial da UPAMA</div> <BiHomeAlt2 style={{'color': 'rgb(49, 49, 49)', 'fontSize': '44px', 'paddingRight': '20px'}}/> </a>
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
              <li className={styles.doeAgora}>
                <a href="/doacao" >Doe Agora</a>
              </li>
            </ul>
          </nav>
          <FaTimes onClick={handleMenuToggle} style={{'fontSize': '32px','color': '#28992a'}}/>
        </div>
      ) : (
        <FaBars onClick={handleMenuToggle}style={{'fontSize': '32px', 'color': '#28992a'}}/>
      )}
      <div className={styles.instituicao}>
        Instituição UPAMA
      </div>
      <div className={styles.logo}>
        <img src="/images/favicon.ico" alt="logo da UPAMA" />
      </div>
    </header>
  );
};
