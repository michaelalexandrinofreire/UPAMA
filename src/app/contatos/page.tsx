import style from '../contatos/style/style.module.css'

export default function Contatos(){
    
    return(
        <main className={style.mainContatos}>
            <h1>Contatos</h1>
            <div className={style.container}>
               <div className={style.contatosContainer}>
                <div className={style.basicContatos}>
                    <div className={style.sede}>
                        <h2>Sede da UPAMA</h2>
                        <p>Rua Paulo Antônio de Sousa, N°91</p>
                        <p>Vila Sao Francisco, Crato - CE, 63138-000</p>
                        <a href="tel:+5588999214908">(88) 99921-4908</a> 
                        <button>
                            <a href="https://www.google.com/maps/place/Uni%C3%A3o+Protetora+dos+Animais+e+Meio+Ambiente+-+UPAMA/@-7.15927,-39.409825,9z/data=!4m6!3m5!1s0x7a187cc0ebae36d:0xe77d4274e2dee744!8m2!3d-7.1592705!4d-39.409825!16s%2Fg%2F11frqx56yd?hl=pt-BR&entry=ttu"
                            target='blank'>
                            Ver no Google Maps
                            </a>
                        </button>
                    </div>
                    <div className={style.social}>
                        <h2>Siga-nos</h2>
                        <div className={style.socialContainer}>
                            <a className={style.redeSocial}
                            href="https://www.facebook.com/UPAMAOficial/" 
                            target="_blank">
                                <button className={style.facebook}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"> <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/> </svg>
                                </button>
                                <h3>Facebook</h3>
                            </a>
                            <a className={style.redeSocial}
                            href="https://www.instagram.com/instituicao_upama/" 
                            target="_blank">
                                <button className={style.instagram}>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-instagram" ><title>Instagram</title><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>   
                                </button> 
                                <h3>Instagram</h3>
                            </a>
                            <a className={style.redeSocial}
                            href="https://www.youtube.com/@instituicaoupama5830" 
                            target='blank'>
                                <button className={style.youtube}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/> </svg>
                                </button>
                                <h3>Youtube</h3>
                            </a>
                            <a className={style.redeSocial}
                            href="https://api.whatsapp.com/send?phone=558899214908&text=Ol%C3%A1!" 
                            target="_blank">
                                <button className={style.whatsapp}>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/> </svg>
                                </button>
                                <h3>Whatsapp</h3>
                            </a>
                        </div>
                    </div>
                </div>
                </div>

                <div className={style.formulario}>
                    <h2>Solicite nossos serviços</h2>
                <form action="https://api.staticforms.xyz/submit" method="post">
                    <input type="hidden" name="accessKey" value="de260494-4f11-423c-ad35-3d67bcad3c66"/>
                    <div className={style.nameemail}>
                        <div className={style.nomelabel}>
                            <label  className={style.nome}>Nome</label>
                            <input type="text" name="name" placeholder="Seu nome ou da instituição"/>
                        </div>
                        <div className={style.emaillabel}>
                            <label className={style.email}>E-mail</label>
                            <input type="email" name="email" placeholder="Seu e-mail"/>
                        </div>
                    </div>
                    <label htmlFor="">Tipo de serviço</label>
                    <select name="tipodeservico" id="tipodeservico" className={style.tipodeservico}>
                        <option value="Nulo"> - </option>
                        <option value="Educação Ambiental">Educação Ambiental</option>
                        <option value="Projetos Socioambientais">Projetos Socioambientais</option>
                        <option value="Reflorestamento">Reflorestamento</option>
                        <option value="Cursos e Formações">Cursos e Formações</option>
                    </select>
                    <label htmlFor="">Mensagem</label>
                    <textarea name="message" id=""  placeholder="Sua mensagem"></textarea>
                    <input type="hidden" name="redirectTo" value="https://upama.vercel.app/contatos"></input>
                    <button type="submit" value="Submit" className={style.buttonform}>Enviar</button>
                </form>
                </div> 
            </div>  
        </main>
    )
}
