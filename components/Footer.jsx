import React from 'react';
import styles from '../public/components/Footer.module.scss'

const Footer = () => {
    return(
        <section className={styles.footer__container}>
            <div className={styles.contacto}>
                <h1  id='footer__info'>Informacion de contacto</h1>
                <p></p>
                <p>WhatsApp: +54 341 322-7828 </p>
                <p>Correo electrónico: juan.werkalec@gmail.com</p>
            </div>
            <div className={styles.sociales}>
                <h1>Redes Sociales</h1>
                <a className={styles.linkedin} href='https://www.linkedin.com/in/juan-ignacio-werkalec-07b033198/' rel="noopener noreferrer" target="_blank">
                    <img className={styles.linkedin__img} src='/iconos/logotipo.png' alt="icono linkedin"/>
                </a>
            </div>
        </section>
    )
}
export default Footer;