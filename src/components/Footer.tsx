import { BsFacebook, BsInstagram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import styles from '../style/footer.module.css'

export default function Footer(){

 return(
  <footer className={styles.footer}>
    <div className={styles.containerInfor}>
      <div className={styles.pages}>
        <h2>Institucional</h2>
        <div>
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
        </div>
      </div>
      <div className={styles.participe}>
        <h2>Faça parte da nossa causa</h2>
        <div>
          <a href="/doacao"><button> Faça uma doação </button></a>
          <a href="/contatos"><button> Seja um Parceiro</button></a>
        </div>
      </div>
      <div className={styles.redes}>
        <h2>Siga-nos nas redes sociais</h2>
        <div>
          <div>
            <a href="">
              <BsInstagram size={'30px'}/>
            </a>
            <a href="">
              <BsFacebook size={'30px'}/>
            </a>
            <a href="">
              <BsWhatsapp size={'30px'}/>
            </a>
            <a href="">
              <BsYoutube size={'30px'}/>
            </a>
          </div>
          <div className={styles.contatos}>
            <a href="/contatos">Entre em contato</a>
          </div>
        </div>
        
      </div>
    </div>
    <div className={styles.endFooter}>
      <p>© União Protetora dos Animais e Meio Ambiente - site desenvolvido por <a href="https://github.com/michaelalexandrinofreire">Michael Freire</a></p>
    </div>
  </footer>
 )
}