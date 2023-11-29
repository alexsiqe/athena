import React, { useEffect, useState } from "react";
import axios from "axios";
import BarraDeNavegacao from '../../Components/BarraDeNavegacao/BarraDeNavegacao';
import CardCurso from '../../Components/CardCurso/CardCurso';
import styles from './TelaHome.module.css'
import Footer from '../../Components/Footer/Footer'
import Desenho from '../../assets/images/Desenho.png'
import FundoAthena from '../../assets/images/FundoAthena.png'
import { useParams } from 'react-router-dom';


function TelaHome() {
    const [cursos, setCursos] = useState([]);

    useEffect(() => {
        BuscarCursos();
    }, []);

    async function BuscarCursos(){
        const response = await axios.get("https://localhost:44333/api/athena/buscarcursos");
        
        if(response.status != 200){
            alert("Erro ao listar usuários");
            return;
        }
        setCursos(response.data);
        }

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
            {cursos.map((curso) => (
                <CardCurso
                    key={curso.id}
                    titulo={curso.nome}
                    descricao={curso.desc}
                    autor={curso.instrutor}
                    className={styles.CardCurso}
                ></CardCurso>
            ))}
               
            
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default TelaHome;