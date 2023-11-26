import React from 'react';
import BarraDeNavegacao from '../../Components/BarraDeNavegacao/BarraDeNavegacao';
import styles from './TelaSobreNos.module.css';

function SobreNos() {
    return (
        <div className={styles.container}>
            <BarraDeNavegacao></BarraDeNavegacao>
                <div className={styles.textos}>
                    <span className={styles.a}>A tecnologia</span>
                    <span className={styles.b}>na palma das suas mãos</span>
                    <span className={styles.quemsomos}>QUEM SOMOS?</span>
                    <span className={styles.c}>A Athena é uma empresa apaixonada em propagar a tecnologia para todos. Nosso ideal é tornar a tecnologia acessível, capacitando pessoas e empresas a enfrentar os desafios do mundo digital. Acreditamos na colaboração e na construção de uma comunidade de compartilhamento de conhecimento. Nosso objetivo é crescer, aprender e impactar o mundo ao nosso redor, impulsionando a inovação e criando um futuro digital inclusivo.</span>
                </div>
        </div>
    )
}

export default SobreNos;