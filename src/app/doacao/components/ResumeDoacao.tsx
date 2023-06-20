import style from '../style/globals.module.css'
import { useState } from 'react'

interface resumeProps {
    valorTotal: string;
}

export default function ResumeDoacao({ valorTotal }: resumeProps){

    return(
        <div className={style.resumeContainer}>
            <h2>Resumo da doação</h2>
            <img src="/images/pagbank.png" alt="" />

            <div className={style.informationsResume}>
                <div className={style.resume}>
                    <p>Instituição</p> <span>UPAMA</span>
                </div>
                <div className={style.resume}>
                    <p>Total</p> <span className={style.total}>{valorTotal}</span>
                </div>
            </div>
        </div>
    )
}