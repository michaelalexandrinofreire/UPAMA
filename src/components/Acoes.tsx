import Button from "./Button";

export default function Acoes(){
 return(
  <div className="acao-container">
   <h2 className="titulo-acoes">Ações</h2>
   <div className="acoes">
    <div className="acao">
     <img src="/images/educacaoambiental.jfif" alt="" />
     <h3>Educação Ambiental</h3>
     <p>A educação ambiental objetiva a compreensão dos 
        conceitos relacionados ao meio ambiente, sustentabilidade, 
        preservação e conservação.
     </p>
     <Button href="" text="Leia mais"/>
    </div>
    <div className="acao">
     <img src="/images/fauna.jfif" alt="" />
     <h3>Resgate de Fauna</h3>
     <p>A equipe de resgate de animais silvestre da Instituição UPAMA, tem a enorme alegria e gratidão de poder contribuir na preservação da nossa fauna, através do resgate de animais em situação de vulnerabilidade.</p>
     <Button href="" text="Leia mais"/>
    </div>
    <div className="acao">
     <img src="/images/reflorestamento.jfif" alt="" />
     <h3>Reflorestamento</h3>
     <p>A instituição UPAMA contribuir para o reflorestamento de áreas degradadas e desmatadas, com o plano de manejo que monitora o desenvolvimento natural da área e com o plantio de mudas de forma adequada.</p>
     <Button href="" text="Leia mais"/>
    </div>
   </div>
  </div>
 )
}