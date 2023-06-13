"use client"
import React, { useState } from "react";
import Values from "./components/FormasDoacao";
import FormasDoacao from "./components/FormasDoacao";


export default function PaginaDoacao() {
  
  return (
    <main>
      <h1>Doação</h1>
      <section>
        <FormasDoacao/>
      </section>
      <section>
        <Values/>
      </section>
      
    </main>
  );
}