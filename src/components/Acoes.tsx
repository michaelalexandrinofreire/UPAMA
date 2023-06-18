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
      <a href="/contatos">
        <button className={styles.agendeAcao}>
          <div className={styles.textAgende}>Agende uma ação</div>
        </button>
   </a>
   </div>
  </div>
 )
}