"use client"
import { SetStateAction, useState } from 'react';
import style from '../doacao/style/globals.module.css'
import FormasDoacao from "./components/FormasDoacao";
import ResumeDoacao from "./components/ResumeDoacao";

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