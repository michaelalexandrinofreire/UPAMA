import Button from "./Button";
import styles from '../style/navbar.module.css'

export default function NavBar(){
 return(
  <header className={styles.header}>
   <div className={styles.institutoName}>
    <div className={styles.instituicao}>
     Instituição UPAMA
    </div>
    <div className={styles.logoLign}></div>
    <div className={styles.logo}>
      <a href="/">
        <img src="/favicon.ico" alt="logo da UPAMA" />
      </a>
    </div>
    <div className={styles.upama}>
     União Protetora dos Animais e Meio Ambiente
    </div>
   </div>

   <nav>
    <ul className={styles.ul}>
     <li >
      <a href="/quemsomos">Quem somos</a>
     </li>
     <li>
      <a href="">Serviços</a>
     </li>
     <li>
      <a href="">Contato</a>
     </li>
    </ul>
    </nav>
    <Button href='/doacao' text='Doe agora'/>

  </header>
 )
}