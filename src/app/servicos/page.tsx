import Acao from "@/components/Acao";
import style from '../../app/servicos/style/style.module.css'
export default function Servicos(){
    return(

        <main className={style.mainServicos}>
            <h1 className={style.titleServicos}>Serviços</h1>
            <div className={style.containerServicos}>
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
            imgSrc="/images/reflorestamento.jfif"
            altImg=""
            title="Reflorestamento"
            texto="A instituição UPAMA desempenha um papel fundamental no reflorestamento de áreas degradadas e desmatadas, por meio de um plano de manejo que monitora o desenvolvimento natural dessas regiões e implementa o plantio adequado de mudas.  A instituição contribui para a preservação do meio ambiente e construção de um futuro sustentável positivo, onde a natureza possa se recuperar e florescer novamente com harmonia."/>
            <Acao 
                title="Cursos e Formações" 
                texto="Atuamos na formação de multiplicadores ambientais através de cursos ofertados pela UPAMA. 
                Oferecermos dois curso: Exercícios do Agente Ambiental e Agente
                de Proteção Ambiental,capacitando os Guardas Municipais na área ambiental, 
                para também combater os crimes ambientais, aplicando conhecimentos práticos e teóricos."
                altImg="Equipe da UPAMA"
                imgSrc="/images/cursoseformacoes.jfif"/>
            <Acao 
                title="Preservação do Meio Ambiente" 
                texto="A UPAMA trabalha para promover a mudança de atitudes e comportamentos, 
                visando um mundo mais sustentável e compassivo. Realizamos campanhas, palestras
                e eventoscomunitários para disseminar conhecimento e engajar as pessoas. Sabemos da importância de incluir a comunidade na luta por um mundo sustentável."
                altImg="Imagem da floresta nacional do araripe"
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/CHAPADA_DO_ARARIPE_04.jpg"/>
            </div>
        </main>
    )
}