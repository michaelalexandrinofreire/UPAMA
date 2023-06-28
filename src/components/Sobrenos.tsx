import style from '../style/sobreNos.module.css'

export default function Sobrenos(){
  return(
    <div className={style.container}>
      <div className={style.sobreNos}>
        <h2>Entenda como preservamos o meio ambiente</h2>
        <p>A UPAMA é uma organização dedicada à <span>proteção do meio ambiente</span>  e à conscientização ambiental. Nossa missão é preservar a flora e fauna, promovendo ações educativas para o desenvolvimento socioambiental.</p>
        <p> Junte-se a nós nessa causa e faça parte da transformação em prol de um meio ambiente saudável para as futuras gerações.</p>
      </div>
      <div className={style.img}>
        <img src="/images/favicon.ico" alt="Logo da UPAMA" />
      </div>
    </div>
  )
}