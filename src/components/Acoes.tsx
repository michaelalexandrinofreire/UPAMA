import Button from "./Button";
import styles from '../style/acoes.module.css'
import Acao from "./Acao";

export default function Acoes(){
 return(
  <div className={styles.acaoContainer}>
    <div className={styles.div}>
      <h2 className={styles.tituloAcoes}>Conheça os trabalhos que realizamos</h2>
      <p>Desenvolvemos ações em cinco áreas distintas de preservação ambiental que são essenciais para a conservação do meio ambiente. A seguir, apresentamos algumas das atividades em que atuamos:</p>
    </div>
   
   <div className={styles.acoes}>
    <Acao 
    imgSrc="/images/educacaoambiental.jfif"
    altImg="Plantio de muda em escola"
    title="Educação Ambiental"
    texto="A educação ambiental tem como objetivo promover a compreensão dos conceitos relacionados ao meio ambiente, sustentabilidade, preservação e conservação, despertando uma consciência crítica em relação aos impactos das ações humanas. Busca capacitar os indivíduos a tomar decisões informadas, adotar práticas responsáveis e participar ativamente na resolução dos desafios ambientais."/>
    <Acao
    imgSrc="/images/fauna.jfif"
    altImg="Cobra resgatada pela UPAMA"
    title="Resgate de fauna"
    texto="A equipe de resgate de animais silvestres da Instituição UPAMA sente uma imensa alegria e gratidão por poder desempenhar um papel significativo na preservação da nossa fauna, resgatando e auxiliando animais em situação de vulnerabilidade. Ao realizar essas ações, contribuímos para a proteção e conservação da vida selvagem, promovendo um impacto positivo e duradouro em nosso ecossistema. "/>
    <Acao 
    title="Cursos e Formações" 
    texto="Atuamos na formação de multiplicadores ambientais através de cursos ofertados pela UPAMA. 
    Oferecermos dois curso: Exercícios do Agente Ambiental e Agente
    de Proteção Ambiental,capacitando os Guardas Municipais na área ambiental, 
    para também combater os crimes ambientais, aplicando conhecimentos práticos e teóricos."
    altImg="Equipe da UPAMA"
    imgSrc="/images/cursoseformacoes.jfif"/>
    </div>
    <div className={styles.containerAgende}>
      <a href="/contatos" target="_blank">
        <button className={styles.agendeAcao}>
          <div className={styles.textAgende}>Agende um serviço</div>
        </button>
      </a>
   </div>
  </div>
 )
}