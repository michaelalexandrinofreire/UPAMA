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
      {isOpen ? (
        <div className={styles.menuMobile}>
          <nav>
            <ul className={styles.ul}>
              <li>
                <a href="/">Página Inicial</a>
              </li>
              <li >
                <a href="/quemsomos">Quem somos</a>
              </li>
              <li>
                <a href="/servicos">Serviços</a>
              </li>
              <li>
                <a href="/contatos">Contato</a>
              </li>
            </ul>
          </nav>
          <FaTimes onClick={handleMenuToggle} size={45}/>
        </div>
      ) : (
        <FaBars onClick={handleMenuToggle} size={45} className='menuMenu'/>
      )}
    </header>
  );
};
