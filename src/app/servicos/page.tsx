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
                preservação e conservação."
                imageSrc="/images/educacaoambiental.jfif"/>
                <Acao title="Resgate de fauna"
                description="A equipe de resgate de animais silvestre da Instituição UPAMA,
                tem a enorme alegria e gratidão de poder contribuir na preservação da nossa fauna,
                através do resgate de animais em situação de vulnerabilidade."
                imageSrc="/images/fauna.jfif"/>
                <Acao title="Reflorestamento"
                description="A instituição UPAMA contribuir para o reflorestamento de áreas degradadas
                e desmatadas, com o plano de manejo que monitora o desenvolvimento natural da área e 
                com o plantio de mudas de forma adequada."
                imageSrc="/images/reflorestamento.jfif"/>
                <Acao title="Cursos e Formações" 
                description="Atuamos na formação de multiplicadores ambientais através de cursos. 
                Oferecermos atualmente, dois curso o de Exercícios do Agente Ambiental e o de Agente
                de Proteção Ambiental."
                imageSrc="/images/cursoseformacoes.jfif"/>
                <Acao title="Preservação do Meio Ambiente" 
                description="Somos uma instituição comprometida em proteger o meio ambiente. Trabalhamos para
                 conscientizar e preservar, promovendo um futuro sustentável."
                imageSrc="https://upload.wikimedia.org/wikipedia/commons/6/6f/CHAPADA_DO_ARARIPE_04.jpg"/>
            </div>
        </main>
    )
}