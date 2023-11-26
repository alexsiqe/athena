
import React, { useRef } from 'react';
import styles from './BarraDeNavegacao.module.css'
import TelaHome from '../../Pages/TelaHome/TelaHome';
import { useOutsideClick } from './useOutsideClick';
import { useNavigate } from "react-router-dom";
import loupe from '../../assets/images/loupe.png'

function BarraDeNavegacao() {

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef)
  const onClick = () => setIsActive(!isActive)

  const navigate = useNavigate();

  const handleTelaAluno = () => {
    navigate('/TelaAluno')
  }

  const handleTelaEditarPerfil = () => {
    navigate('/TelaEditarPerfil')
  }

  const handleTelaHome = () => {
    navigate('/TelaHome')
  }

  const handleTelaSobreNos = () => {
    navigate('/TelaSobreNos')
  }


  console.log(isActive)

  return (
    <div className={styles.Container}>
      <span className={styles.Logo} onClick={handleTelaHome}>ATHN</span>
      <div className={styles.esquerda}>
        <ul>
          <li>
            <a href='# '>Favoritos</a>
          </li>
          <li className={styles.dropdown}>
            <a href='# '>Categorias</a>
            <div className={styles.dropdownCat}>
              <a>Desenvolvimento</a>
              <a>Design</a>
              <a>Ti & Software</a>
            </div>
          </li>
          <li>
            <a href='# ' onClick={handleTelaSobreNos}>Sobre Nós</a>
          </li>
        </ul>
      </div>
      
      <div className={styles.searchbox}>
        <input className={styles.pesquisar} type='text' name='pesquisar' placeholder='Pesquisar'/>
        <a href='# ' className={styles.searchbtn}>
          <img src={loupe} alt='Lupa' height={20} width={20}></img>
        </a>
      </div>

      <div className={styles.listaperfil}>
        <ul>
          <li>
            <a href='#' className='' onClick={handleTelaAluno}>Perfil</a>
          </li>
          <li>
            <a href='#' className='' onClick={handleTelaEditarPerfil}>Editar Perfil</a>
          </li>
          <li>
            <a href='#' className='' onClick={handleTelaAluno}>Configurações</a>
          </li>
          <li>
            <a href='#' className='' onClick={handleTelaAluno}>Desconectar</a>
          </li>
        </ul>
      </div>
      {/* <button onClick={onClick} img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" className={styles.imagem}></button>

      <nav className={styles.direita}>
        <ul>
          <li>
            <a href='# ' className='' onClick={handleTelaAluno}>Perfil</a>
          </li>
          <li>
            <a href='# ' className='' onClick={handleTelaEditarPerfil}>Editar Perfil</a>
          </li>
          <li>
            <a href='# ' className='' onClick={handleTelaAluno}>Configurações da conta</a>
          </li>
          <li>
            <a href='# ' className='' onClick={handleTelaAluno}>Assinatura</a>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}

export default BarraDeNavegacao;