import React from "react";
import styles from './TelaRegistro.module.css'
import BarraDeNavegacao from "../../Components/BarraDeNavegacao/BarraDeNavegacao";
import Input from '../../Components/Input/Input.jsx';

function TelaRegistro() {


    return(
        <div>
            <div className={styles.barra}><BarraDeNavegacao></BarraDeNavegacao></div>
                <div className={styles.container}>
                <div className={styles.fundoRegistro}>
                    <span>NOVA CONTA</span>
                                <div>
                                    <div className={styles.inserts}>
                                        <input className="email"></input>
                                    </div>
                                    <div>
                                        <input></input>
                                    </div>
                                    <div>
                                        <input></input>
                                    </div>
                                    <div>
                                        <input></input>
                                    </div>
                                </div>
                            <span>Ao criar uma conta você aceita nossos termos de serviço e politica de privacidade.</span>
                                <div>
                                    <input type="checkbox"></input>                    
                                    <span>Mentor de conteúdo?</span>
                                </div>
                            <button>criar conta</button>
                        <span>Já possui uma conta? entrar</span>
                    </div>
            </div>
        </div>
    )
}

export default TelaRegistro;