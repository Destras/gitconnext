import React from 'react';
import styles from '../public/components/Header.module.scss'

const Header = () => {
    const handleClick = (donde) => {
        const ref = document.getElementById(donde)
        ref.scrollIntoView({block: "start", behavior: "smooth"})
    }
    return(
        <header className={styles.header__container}>
            <p onClick={()=>{handleClick('infoPersonal')}}>Yo</p>
            <p onClick={()=>{handleClick('projectosContainer')}}>Mis Proyecots</p>
            <p onClick={()=>{handleClick('experiencia')}}>Experiencia</p>
            <p onClick={()=>{handleClick('footer__info')}}>Contacto</p>
        </header>
    )
}

export default Header;