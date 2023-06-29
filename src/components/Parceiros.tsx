import styles from '../style/parceiros.module.css'

export default function Parceiros(){
 return(

        <div className={styles.parceiroContainer}>
          <div className={styles.divInicio}>
            <h2 className={styles.tituloParceiro}>
              Nossos Parceiros
            </h2>
            <p>Podemos contar com o suporte de colaboradores que compartilham da convicção de um amanhã promissor para a diversidade ambiental.</p>
          </div>
          
          <div className={styles.parceiros}>
            <div className={styles.parceiro}>
              <img src="/images/assai_logo.png" alt="Assai Atacadista"  className={styles.image1}/>
            </div>
            <div className={styles.parceiro}>
              <img src="/images/geopark_logo.jpg" alt="Geopark" className={styles.image2}/>
            </div>
            <div className={styles.parceiro}>
              <img src="/images/crato_logo.png" alt="Prefeitura do Crato"className={styles.image3} />
            </div>
            
          </div>
        </div>
  
  
 )
}