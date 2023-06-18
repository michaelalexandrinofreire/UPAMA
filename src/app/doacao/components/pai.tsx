import ResumeDoacao from "./ResumeDoacao";
import Values from "./Values";

export default function Pai(){
  return(
    <div>
      <Values valorTotal="" setValorTotal={}/>
      <ResumeDoacao valorTotal=""/>
    </div>
  )
}