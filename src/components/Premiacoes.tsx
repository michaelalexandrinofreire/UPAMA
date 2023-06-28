import styles from '../style/premiacoes.module.css';
import { GiPlantsAndAnimals } from 'react-icons/gi';
import { BsFillAwardFill } from 'react-icons/bs';

export default function Premiacoes(){
 return(
  <div className={styles.premiacoesContainer}>
   <h2>Premiações</h2>
   <div className={styles.containerFlex}>
    <div className={styles.premiacoes}>

      <div className={styles.premiacao}>
        <div className={styles.logoPremiacao}>
          <BsFillAwardFill color=' #925a1a' size={'22px'}/>
        </div>
        <div className={styles.informationPremiacao}>
          <h3>Título de Utilidade Pública Municipal – Crato/CE</h3>
          <p>Em 18 de agosto de 2021, a Instituição UPAMA foi declarada de utilidade pública pela Prefeitura Municipal de Crato, através da Lei nº 3.809/2021.</p>
        </div>
        </div>
        <div className={styles.premiacao}>
        <div className={styles.logoPremiacao}>
          <BsFillAwardFill color=' #925a1a' size={'22px'}/>
        </div>
        <div className={styles.informationPremiacao}>
          <h3>Título de Utilidade Pública Estadual – Ceará</h3>
          <p>Através da Lei Nº 18.192, de 31 de Agosto de 2022, o Governo do Estado do Ceará declarou a Instituição UPAMA com o título de Utilidade Pública Estadual.</p>
        </div>
      </div>
      
      </div>
      <div className={styles.svg}>
        <GiPlantsAndAnimals size={'120px'} color='#b39f8a'/>
      </div>
   </div>
   
  </div>
 )
}