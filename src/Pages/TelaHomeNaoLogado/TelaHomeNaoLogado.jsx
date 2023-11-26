import React from 'react';
import BarraDeNavegacao from '../../Components/BarraDeNavegacao/BarraDeNavegacao';
import CardCurso from '../../Components/CardCurso/CardCurso';
import styles from './TelaHomeNaoLogado.module.css'
import Footer from '../../Components/Footer/Footer'
import Desenho from '../../assets/images/Desenho.png'
import FundoAthena from '../../assets/images/FundoAthena.png'


function TelaHomeNaoLogado() {
    return (
        <div className={styles.container}>
            <BarraDeNavegacao></BarraDeNavegacao>
            <div className={styles.PalavrasBackground}>
                <p className={styles.A}>ATHENA</p>
                <p className={styles.B}>O próximo passo para o futuro</p>
                <p className={styles.C}>Estude, pratique, discuta e se aprofunde na plataforma para alunos feita por alunos.</p>
            </div>
            <div className={styles.ContainerImagens}>
                <img src={FundoAthena} alt='FundoAthena' className={styles.FundoAthena}/>
                <img src={Desenho} alt='Desenho' className={styles.Desenho} />
            </div>
        </div>
    )
}

export default TelaHomeNaoLogado;