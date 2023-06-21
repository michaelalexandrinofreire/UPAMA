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
      <img src="/images/favicon.ico" alt="logo da UPAMA" />
    </div>
    <div className={styles.upama}>
     União Protetora dos Animais e Meio Ambiente
    </div>
   </div>

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
    <a href="/doacao">
      <Button text='Doe agora'/>
    </a>
    

  </header>
 )
}