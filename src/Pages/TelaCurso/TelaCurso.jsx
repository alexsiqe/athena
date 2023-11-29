import React, { useEffect, useState } from "react";
import styles from './TelaCurso.module.css';
import BarraDeNavegacao from "../../Components/BarraDeNavegacao/BarraDeNavegacao";
import Mentor from '../../Components/Mentor/Mentor';
import axios from "axios";
import DescricaoAula from "../../Components/DescricaoAula/DescricaoAula";
import { useParams } from 'react-router-dom';


function TelaCurso({ nomedocurso, oferece }) {

    const [descricao, setDescricao] = useState([]);
    const descricaoIdDesejado = 1;
    const { idDoCurso } = useParams();

    useEffect(() => {
        BuscarDescricao();
    }, [])

    async function BuscarDescricao() {
        const response = await axios.get("https://localhost:44333/api/athena/listaraulas");

        const descricaoFiltrada = response.data.filter(item => item.id === descricaoIdDesejado);

        setDescricao(descricaoFiltrada);
    }

    return (
        <div className={styles.container}>
            <BarraDeNavegacao></BarraDeNavegacao>
            <div className={styles.up}>
                <div className={styles.descricao}>
                    <span className={styles.descA}>Descrição</span>
                    {descricao.map((descricao) => (
                        <DescricaoAula key={descricao.id} descricao={descricao.desc}></DescricaoAula>
                    ))}
                </div>

                <div className={styles.containervideo}>
                    <video></video>
                    <div>
                        <div>
                            <span>{nomedocurso}</span>
                        </div>
                        <Mentor></Mentor>
                    </div>
                </div>
            </div>

            <div className={styles.containerbaixo}>
                <div className={styles.oferecimentos}>
                    <span>Este curso oferece:</span>
                    <span>{oferece}</span>
                </div>
            </div>
            <div className={styles.comentarios}>
                <span>Comentários</span>
                <input type='text' name='Comentarios' placeholder='Adicione seu comentário! ...'></input>
            </div>
        </div>
    )
}

export default TelaCurso;