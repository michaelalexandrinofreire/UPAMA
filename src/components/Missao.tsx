import styles from '../style/missao.module.css'

export default function Missao(){
 return(
  <div className={styles.missao}>
   <h3 className={styles.tituloMissao}>Missão</h3>
   <p className={styles.pMissao}>"Preservar e proteger a flora e fauna em todas as suas formas."</p>
  </div>
 )
}