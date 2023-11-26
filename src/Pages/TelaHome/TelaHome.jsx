import React from 'react';
import BarraDeNavegacao from '../../Components/BarraDeNavegacao/BarraDeNavegacao';
import CardCurso from '../../Components/CardCurso/CardCurso';
import styles from './TelaHome.module.css'
import Footer from '../../Components/Footer/Footer'
import Desenho from '../../assets/images/Desenho.png'
import FundoAthena from '../../assets/images/FundoAthena.png'


function TelaHome() {
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
            {/* <div> 
                CARROSSEL
                </div> */}
            <div className={styles.Cursos}>
                <CardCurso titulo={"Curso de Java"} descricao={"Este é, sem sombra de dúvidas, o curso de Java mais completo que você vai encontrar na atualidade."} autor={"Alex"} data={"09/09/2023"}></CardCurso>
                <CardCurso titulo={"Curso de Java"} descricao={"Este é, sem sombra de dúvidas, o curso de Java mais completo que você vai encontrar na atualidade."} autor={"Alex"} data={"09/09/2023"}></CardCurso>
                <CardCurso titulo={"Curso de Java"} descricao={"Este é, sem sombra de dúvidas, o curso de Java mais completo que você vai encontrar na atualidade."} autor={"Alex"} data={"09/09/2023"}></CardCurso>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default TelaHome;