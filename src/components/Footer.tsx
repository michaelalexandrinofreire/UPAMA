import styles from '../style/footer.module.css'

export default function Footer(){

 return(
  <footer className={styles.footer}>
    <div className={styles.footerInformation}>
      <div className={styles.linksPage}>
        <a href="/quemsomos" className={styles.link}>Quem somos</a>
        <a href="/servicos" className={styles.link}>Serviços</a>
        <a href="/contatos" className={styles.link}>Contato</a>
        <a href="doacao" className={styles.link}>Doe agora</a>
      </div>
      <div className={styles.contatosfooter}>
        <div className={styles.social}>
          <div className={styles.whatsapp}>
            <a href="https://api.whatsapp.com/send?phone=558899214908&text=Ol%C3%A1!" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
              
              <div>Whatsapp</div>
            </a>
          </div>
          <div className={styles.instagram}>
            <a href="https://www.instagram.com/instituicao_upama/" target="_blank"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram" ><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <clipPath id="clip0_7_415">
              <rect width="18" height="18" fill="white"/>
              </clipPath>
              
              <div>Instagram</div>
            </a>
          </div>
          <div className={styles.facebook}>
            <a href="https://www.facebook.com/UPAMAOficial/" target="_blank">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_7_411)">
              <path d="M8.59297 16.8406C3.99766 16.8605 0.21914 13.0355 0.32871 8.36383C0.43164 3.91461 4.11719 0.239026 8.69922 0.28883C13.2381 0.338635 16.9934 4.11715 16.8705 8.79547C16.7543 13.2248 13.0986 16.8638 8.59297 16.8406ZM1.33476 8.57633C1.37129 12.7367 4.74473 15.9408 8.7291 15.8711C12.5873 15.8013 15.8578 12.657 15.8578 8.56637C15.8578 4.40602 12.4578 1.18863 8.46016 1.265C4.60195 1.33473 1.36133 4.48903 1.33476 8.57633Z" fill="white"/>
              <path d="M6.86641 14.3902C6.86641 12.4346 6.86641 10.4955 6.86641 8.53652C6.43477 8.53652 6.01641 8.53652 5.58809 8.53652C5.58809 7.87246 5.58809 7.22832 5.58809 6.56426C5.64453 6.56094 5.70098 6.5543 5.76075 6.5543C6.06953 6.5543 6.38164 6.54766 6.69043 6.55762C6.82657 6.56094 6.87305 6.52441 6.86973 6.38496C6.86309 5.88027 6.86309 5.37891 6.86641 4.87422C6.86973 4.30645 7.0291 3.7918 7.43418 3.38008C7.82598 2.98164 8.32735 2.76582 8.87188 2.73262C9.74844 2.68281 10.6283 2.68945 11.5082 2.67285C11.5182 2.67285 11.5281 2.68281 11.548 2.69277C11.548 3.36016 11.548 4.03086 11.548 4.71816C11.485 4.72148 11.4252 4.7248 11.3688 4.7248C10.9703 4.7248 10.5719 4.7248 10.1734 4.7248C9.77168 4.72813 9.53594 4.96719 9.53594 5.3623C9.53594 5.7375 9.53594 6.11602 9.53926 6.49121C9.53926 6.50117 9.5459 6.51113 9.55586 6.54766C10.2133 6.54766 10.8773 6.54766 11.5746 6.54766C11.4883 7.22168 11.4086 7.86582 11.3223 8.5332C10.7213 8.5332 10.1336 8.5332 9.5293 8.5332C9.5293 10.4988 9.5293 12.4445 9.5293 14.3969C8.63614 14.3902 7.76621 14.3902 6.86641 14.3902Z" fill="white"/>
              </g>
              <defs>
              <clipPath id="clip0_7_411">
              <rect width="17" height="17" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              <div>Facebook</div>        
            </a>
          </div>
          <div className={styles.youtube}>
            <a href="https://www.youtube.com/@instituicaoupama5830" target='blank'>
            <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.4 19.9333H4.6C2.06387 19.9333 0 17.8695 0 15.3333V7.66668C0 5.1306 2.06387 3.06668 4.6 3.06668H18.4C20.9361 3.06668 23 5.1306 23 7.66668V15.3333C23 17.8695 20.9361 19.9333 18.4 19.9333ZM21.9778 7.66668C21.9778 5.6938 20.3729 4.08894 18.4 4.08894H4.6C2.62711 4.08894 1.02222 5.6938 1.02222 7.66668V15.3333C1.02222 17.3062 2.62711 18.9111 4.6 18.9111H18.4C20.3729 18.9111 21.9778 17.3062 21.9778 15.3333V7.66668ZM8.17778 7.17557L15.6681 11.4995L8.17778 15.8245V7.17557ZM9.2 14.054L13.6237 11.4995L9.2 8.946V14.054Z" fill="white"/>
            </svg>
            <div>Youtube</div>     
            </a>
          </div>
        </div>
      </div>
      
    </div>
    <div className={styles.upamaFooter}>
      <div>© União Protetora dos Animais e Meio Ambiente </div>
    </div>
  </footer>
 )
}