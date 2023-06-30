import { PiPlantFill } from 'react-icons/pi'
import style from  '../style/doe.module.css';
export default function(){
  return(
    <div className={style.container}>
      <div className={style.div}>
        <h2>Quer ser um protetor ambiental?</h2>
        <p>Você pode fazer a diferença! Sua doação para a nossa ONG ambiental é um passo importante na proteção do meio ambiente e na construção de um futuro sustentável.</p>
      </div>
      <div className={style.button}>
        <a href="/doacao">
          <button>Faça Parte</button>
        </a>
        
      </div>
      <div className={style.svg}>
        <PiPlantFill size={'60px'} color='#002401cc'/>
      </div>
    </div>
  )
}