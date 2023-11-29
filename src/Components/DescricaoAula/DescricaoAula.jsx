// DescricaoAula.js
import React from "react";
import styles from './DescricaoAula.module.css';

function DescricaoAula({ descricao }) {
    return (
        <div className={styles.descricao}>
            <span>{descricao}</span>
        </div>
    );
}

export default DescricaoAula;
