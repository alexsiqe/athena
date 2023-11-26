import React from "react";
import styles from './TelaEditarPerfil.module.css';
import BarraDeNavegacao from "../../Components/BarraDeNavegacao/BarraDeNavegacao";


function TelaEditarPerfil( {nome} ) {
    return (
    <div className={styles.container}>
        <BarraDeNavegacao></BarraDeNavegacao>
        <div>
            <img></img>
            <span>{nome}</span>
        </div>
        <div className={styles.basicos}>
            <span>Básicos</span>
            <input></input>
            <input></input>
            <input></input>
        </div>
        <div className={styles.biografia}>
            <span>Biografia</span>
            <input></input>
        </div>
        <div className={styles.links}>
            <span>Links</span>
            <input></input>
            <input></input>
            <input></input>
        </div>
    </div>

)
}

export default TelaEditarPerfil;