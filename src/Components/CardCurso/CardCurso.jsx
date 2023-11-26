import React from 'react';
import styles from './CardCurso.module.css'
import play from '../../assets/images/play.png'
import java from '../../assets/images/java.png'
import { useNavigate } from "react-router-dom"; 

function CardCurso({descricao, autor, data, titulo}) {
    
    
    const navigate = useNavigate();

    const handleTelaCurso = () =>{
      navigate('/TelaCurso')
    }
   
   
    return (
        <div className={styles.Container}>
            <img src={java} alt='b' className={styles.capa} onClick={handleTelaCurso}/>
            <p className={styles.titulo}>{titulo}</p>
            <p className={styles.descricao}>{descricao}</p>
            <p className={styles.autor}>por {autor} - {data}</p>
        </div>

    );
}

export default CardCurso;
