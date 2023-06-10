import styles from '../style/parceiros.module.css'

export default function Parceiros(){
 return(
  <div className={styles.parceiro}>
   <h2 className={styles.tituloParceiro}>
    Nossos Parceiros
   </h2>
   <div className={styles.parceiros}>
    <img src="/images/assai_logo.png" alt="Assai Atacadista"  className={styles.image1}/>
    <img src="/images/geopark_logo.jpg" alt="Geopark" className={styles.image2}/>
    <img src="/images/crato_logo.png" alt="Prefeitura do Crato"className={styles.image3} />
   </div>
  </div>
  
 )
}