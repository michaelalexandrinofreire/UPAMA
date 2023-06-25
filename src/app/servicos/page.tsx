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
                texto="A educação ambiental objetiva a compreensão dos conceitos relacionados ao meio ambiente, sustentabilidade, preservação e conservação. Tendo o
                impacto de despertar uma consciência crítica em relação aos impactos das ações humanas no meio ambiente."/>
                <Acao
                imgSrc="/images/fauna.jfif"
                altImg="Cobra resgatada pela UPAMA"
                title="Resgate de fauna"
                texto="A equipe de resgate de animais silvestre da Instituição UPAMA, tem a enorme alegria e gratidão de poder contribuir na preservação da nossa fauna, através do
                resgate de animais em situação de vulnerabilidade."/>
                <Acao
                imgSrc="/images/reflorestamento.jfif"
                altImg=""
                title="Reflorestamento"
                texto="A instituição UPAMA contribuir para o reflorestamento de áreas degradadas e desmatadas, com o plano de manejo que monitora o desenvolvimento natural da área e com o
                plantio de mudas de forma adequada."/>
            <Acao 
                title="Cursos e Formações" 
                texto="Atuamos na formação de multiplicadores ambientais através de cursos. 
                Oferecermos dois curso: Exercícios do Agente Ambiental e Agente
                de Proteção Ambiental,capacitando os Guardas Municipais na área ambiental, 
                para também combater os crimes ambientais."
                altImg="Equipe da UPAMA"
                imgSrc="/images/cursoseformacoes.jfif"/>
            <Acao 
                title="Preservação do Meio Ambiente" 
                texto="Trabalhamos para promover a mudança de atitudes e comportamentos, 
                visando um mundo mais sustentável e compassivo. Realizamos campanhas, palestras
                e eventoscomunitários para disseminar conhecimento e engajar as pessoas."
                altImg="Imagem da floresta nacional do araripe"
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/CHAPADA_DO_ARARIPE_04.jpg"/>
            </div>
        </main>
    )
}