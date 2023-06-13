import style from '../style/globals.module.css'

export default function Pix(){
    return(
        <div className={style.pix}>
            <h2>Escaneie o QR Code</h2>
            <div className={style.pixContainer}>
                <img src="\images\qr-code.png" alt="qr-code do pix" />
                <p>Ou use a nossa chave pix:</p>
                <p>CNPJ: 29.691.566/0001-99</p>
            </div>  
        </div>
        
    )
}