import Acao from "@/components/Acao";
import style from '../../app/servicos/style/style.module.css'
export default function Servicos(){
    return(
        <main className={style.mainServicos}>
            <h1 className={style.titleServicos}>Serviços</h1>
            <div className={style.containerServicos}>
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
            <Acao title="Cursos e Formações" 
            description="Atuamos na formação de multiplicadores ambientais através de cursos. 
            Oferecermos dois curso: Exercícios do Agente Ambiental e Agente
            de Proteção Ambiental,"
            otherDescription="capacitando os Guardas Municipais na área ambiental, 
            para também combater os crimes ambientais."
            imageSrc="/images/cursoseformacoes.jfif"/>
            <Acao title="Preservação do Meio Ambiente" 
            description="Trabalhamos para promover a mudança de atitudes e comportamentos, 
            visando um mundo mais sustentável e compassivo. Realizamos campanhas, palestras
             e eventos"
            otherDescription=" comunitários para disseminar conhecimento e engajar as pessoas."
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/CHAPADA_DO_ARARIPE_04.jpg"/>
            </div>
        </main>
    )
}