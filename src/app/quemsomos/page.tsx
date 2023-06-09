import style from '../quemsomos/style/style.module.css'

export default function PaginaQuemSomos(){
    return(
        <main className={style.quemSomosContainer}>
            <h1>Quem somos?</h1> 
            <div className={style.container}>
                <div className={style.containertext}>
                   <div className={style.textQuemSomos}>
                        <p>A <span>União Protetora dos Animais e Meio Ambiente - UPAMA</span>, conhecida como Instituição UPAMA foi fundada em 2017 através do Sr. João Bosco Xavier Viveiros para a preservação do meio ambiente, com sede na cidade de Crato no Ceará. </p>
                        <p>A UPAMA é uma instituição não governamental, sem fins lucrativos que tem como missão preservar e proteger a flora e fauna em todas as suas formas. Depois de sair do IBAMA, o <span>Sr. João Bosco Xavier Viveiros</span> procurou uma instituição para continuar sua missão de proteger ao meio ambiente, após participar de uma ONG ambiental no Crato decidiu fundar a UPAMA.</p>
                        <p>A Instituição UPAMA conquistou duas Leis de utilidade pública, a Lei Municipal de  Utilidade Pública de n° 3.439/2018 da Cidade do Crato-CE e a Lei de Utilidade Pública Estadual de n° 18.192/2022 do Estado do Ceará.</p>
                    </div>
                    <div className="valores">
                        <h3>Valores</h3>
                        1. Profissionalismo; <br />
                        2. Transparência; <br />
                        3. Paixão; <br />
                        4. Ética; <br />
                        5. Cooperação; <br />
                        6. Liberdade a Vida.
                    </div>
                    <div className="visao">
                        <h3>Visão</h3>
                        <p>Ser uma instituição de referência nacional na preservação do meio ambiente, através das nossas ações de proteção e conservação do meio ambiente, por meio da educação ambiental.</p>
                    </div> 
                </div>
                
                <div className={style.imgInstituicao}>
                    <img src="images/upamaequipe.jpg" alt="Equipe da UPAMA" />
                </div>  
            </div>
            
        </main>
    )
}