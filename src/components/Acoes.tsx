import Button from "./Button";
import styles from '../style/acoes.module.css'
import Acao from "./Acao";

export default function Acoes(){
 return(
  <div className={styles.acaoContainer}>
   <h2 className={styles.tituloAcoes}>Ações</h2>
   <div className={styles.acoes}>
    <Acao title="Educação Ambiental" 
    description="A educação ambiental objetiva a compreensão dos 
    conceitos relacionados ao meio ambiente, sustentabilidade, 
    preservação e conservação. Tendo o"
    otherDescription="impacto de despertar uma consciência crítica em relação aos impactos
     das ações humanas no meio ambiente."
    imageSrc="/images/educacaoambiental.jfif"/>
    <Acao title="Resgate de fauna"
    description="A equipe de resgate de animais silvestre da Instituição UPAMA,
     tem a enorme alegria e gratidão de poder contribuir na preservação da nossa fauna,
      através do"
      otherDescription="resgate de animais em situação de vulnerabilidade."
    imageSrc="/images/fauna.jfif"/>
    <Acao title="Reflorestamento"
    description="A instituição UPAMA contribuir para o reflorestamento de áreas degradadas
     e desmatadas, com o plano de manejo que monitora o desenvolvimento natural da área e 
     com o"
     otherDescription="plantio de mudas de forma adequada."
     imageSrc="/images/reflorestamento.jfif"/>
   </div>
   <div className={styles.containerAgende}>
      <a href="">
        <button className={styles.agendeAcao}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 7.79396C16 12.0985 12.4837 15.5879 8.14542 15.5879C6.76818 15.5879 5.47431 15.2359 4.34862 14.6181L0 16L1.41778 11.8183C0.702578 10.6439 0.290667 9.26649 0.290667 7.79396C0.290667 3.48942 3.80729 0 8.14542 0C12.4841 0 16 3.48942 16 7.79396ZM8.14542 1.24124C4.50382 1.24124 1.54169 4.1808 1.54169 7.79396C1.54169 9.22773 2.00907 10.5556 2.79964 11.6357L1.97458 14.0693L4.51236 13.2628C5.55502 13.9474 6.80409 14.3467 8.1456 14.3467C11.7867 14.3467 14.7493 11.4075 14.7493 7.79431C14.7493 4.18116 11.7868 1.24124 8.14542 1.24124ZM12.1118 9.58898C12.0633 9.50951 11.9351 9.46151 11.7428 9.36604C11.55 9.27058 10.6032 8.80818 10.4272 8.74471C10.2507 8.68107 10.122 8.64907 9.99378 8.84018C9.8656 9.03147 9.49653 9.46151 9.384 9.58898C9.27164 9.7168 9.15947 9.7328 8.96676 9.63716C8.7744 9.54169 8.15413 9.33973 7.41867 8.68907C6.8464 8.18276 6.45991 7.55769 6.34756 7.36622C6.23538 7.17511 6.33582 7.07182 6.432 6.97671C6.51876 6.89102 6.62471 6.7536 6.72089 6.64213C6.81742 6.53049 6.84942 6.45102 6.91324 6.32338C6.97778 6.19591 6.9456 6.08444 6.89724 5.98862C6.84924 5.89316 6.46382 4.95307 6.30347 4.57049C6.14311 4.18827 5.98293 4.25191 5.8704 4.25191C5.75822 4.25191 5.62969 4.23591 5.50133 4.23591C5.37298 4.23591 5.16427 4.28373 4.98773 4.47484C4.81138 4.66613 4.31413 5.12836 4.31413 6.06827C4.31413 7.00836 5.00373 7.91662 5.10027 8.04391C5.19644 8.1712 6.43182 10.163 8.38916 10.928C10.3467 11.6926 10.3467 11.4375 10.6997 11.4055C11.0524 11.3737 11.8386 10.9435 11.9996 10.4976C12.1596 10.051 12.1596 9.66862 12.1118 9.58898Z" fill="white"/>
          </svg>  
         <div className={styles.textAgende}>Whatsapp</div>
        </button>
   </a>
   </div>
  </div>
 )
}