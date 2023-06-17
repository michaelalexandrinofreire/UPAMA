import style from '../style/globals.module.css'

export default function Pix(){

    const chavePix = '29.691.566/0001-99'; // Sua chave Pix aqui

    const copiarChavePix = () => {
        navigator.clipboard.writeText(chavePix)
        .then(() => {
            alert('Chave Pix copiada para a área de transferência!');
        })
        .catch((error) => {
            console.error('Erro ao copiar a chave Pix:', error);
        });
    };

    return(
        <div className={style.pix}>
            <h2>Escaneie o QR Code</h2>
            <div className={style.pixContainer}>
                <img src="\images\qr-code.png" alt="qr-code do pix" />
                <p>Ou use a nossa chave pix:</p>
                <p className={style.pixKey}>CNPJ: 29.691.566/0001-99</p>
                <button className={style.writePix} onClick={copiarChavePix}>
                    Copiar Chave Pix
                </button>
            </div>  
        </div>
        
    )
}