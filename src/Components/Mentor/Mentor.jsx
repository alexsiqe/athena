import React from "react";
import styles from './Mentor.module.css';

function Mentor({ NomeMentor }) {
    return (
        <div className={styles.container}>
            <img src='https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg' className={styles.image} />
            <div className={styles.containermentor}>
                <span className={styles.mentor}>Mentor: </span>
                <span className={styles.nomeMentor}>{NomeMentor}Exemplo da Silva</span>
            </div>
        </div>
    )
}

export default Mentor;