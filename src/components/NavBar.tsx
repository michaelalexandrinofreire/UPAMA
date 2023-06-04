import Button from "./Button";

export default function NavBar(){
 return(
  <header>
   <div className="institutoName">
    <div className="instituicao">
     Instituição UPAMA
    </div>
    <div className="logoLign"></div>
    <div className="logo">
     <img src="/favicon.ico" alt="logo da UPAMA" />
    </div>
    <div className="upama">
     União Protetora dos Animais e Meio Ambiente
    </div>
   </div>

   <nav>
    <ul>
     <li>
      <a href="">Quem somos</a>
     </li>
     <li>
      <a href="">Serviços</a>
     </li>
     <li>
      <a href="">Parceiros</a>
     </li>
     <li>
      <a href="">Contato</a>
     </li>
    </ul>
    </nav>
    <Button href='https://chat.openai.com/' text='Doe agora'/>

  </header>
 )
}