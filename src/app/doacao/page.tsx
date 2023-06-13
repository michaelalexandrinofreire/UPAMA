"use client"
import style from '../doacao/style/globals.module.css'
import FormasDoacao from "./components/FormasDoacao";
import Values from "./components/Values";
import ResumeDoacao from "./components/ResumeDoacao";
import Pix from './components/Pix';

export default function PaginaDoacao() {
  
  return (
    <main className={style.mainDoacao}>
      <h1>Doação</h1>
      <div className={style.containerDoacao}>
        <section>
          <FormasDoacao/>
        </section>
        <section className={style.sectionResume}>
          <ResumeDoacao/>
          
        </section> 
      </div>
  </main>

  );
}