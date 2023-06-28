"use client"
import React, { useState } from 'react';
import{ HiMenu, HiX } from 'react-icons/hi'
import{ BiHomeAlt2 } from 'react-icons/bi';
import { FaHandHoldingHeart } from 'react-icons/fa'
import styles from '../style/navMenuMobile.module.css';

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
                <a href="/" ><BiHomeAlt2 style={{'color': 'rgb(49, 49, 49)', 'fontSize': '44px', 'paddingRight': '20px'}}/> <div>Página Inicial da UPAMA</div>  </a>
              </li>
              <li >
                <a href="/quemsomos"> Quem Somos</a>
              </li>
              <li>
                <a href="/servicos"> Serviços</a>
              </li>
              <li>
                <a href="/contatos"> Contato</a>
              </li>
              <li className={styles.doeAgora}>
                <a href="/doacao"> <FaHandHoldingHeart style={{'color': '#DC9D0B', 'fontSize': '44px', 'paddingRight': '20px'}}/><div>Doe Agora</div> </a>
              </li>
            </ul>
            <div className={styles.logoImg}>
              <img src="/images/image5.jpg" alt="logo da UPAMA" />
            </div>
          </nav>
          <HiX onClick={handleMenuToggle} style={{'fontSize': '32px','color': 'white', 'fontWeight': '300'}}/>
        </div>
      ) : (
        <HiMenu onClick={handleMenuToggle}style={{'fontSize': '32px', 'color': '#2EB431'}}/>
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
