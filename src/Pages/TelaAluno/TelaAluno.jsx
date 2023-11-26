import React from "react";
import styles from './TelaAluno.module.css';
import BarraDeNavegacao from "../../Components/BarraDeNavegacao/BarraDeNavegacao";

function TelaAluno({ NomeUsuario, Biografia }) {
    return (
        <div className={styles.container}>
            <BarraDeNavegacao></BarraDeNavegacao>
            <div>
                <img src="https://i.pinimg.com/564x/a5/a6/f5/a5a6f5446e9366d6c40f0bef29fe1f1a.jpg" className={styles.banner} />
                <div>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className={styles.foto} />
                    <span className={styles.nomeusuario}>{NomeUsuario}</span>
                </div>
                <div className={styles.container2}>
                    <div className={styles.conexoes}>
                        <span>Conexões</span>
                        <button>AAAAAA</button>
                        <button>AAAAAA</button>
                        <button>AAAAAA</button>
                    </div>
                    <div className={styles.biografia}>
                        <span>Biografia</span>
                        <span>{Biografia}</span>
                    </div>
                    <div className={styles.cursoscompletos}>
                        <span>Cursos Completos</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TelaAluno;