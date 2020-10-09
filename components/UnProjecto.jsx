import React from 'react';
import styles from '../public/components/UnProjecto.module.scss'

const UnProjecto = (props) => {
    const { nombre, fecha, descripcion, tecnologias, participacion, link,link2, foto1, foto2 } = props;
    return (
        <article className={styles.unProjecto__container}>
            <div className={styles.projecto__info__container}>
                <div className={styles.projecto__text__container}>
                    <p>Nombre del proyecto: {nombre} </p>
                    <p>Fecha de creacion: {fecha} </p>
                    <p>Descripción: {descripcion[0]} {<a className='acitos' href={link2} rel="noopener noreferrer" target="_blank">{descripcion[1]}</a>} { descripcion[2]}.</p>
                    <p>Tecnologias empleadas: {tecnologias}.</p>
                    <p>Link al sitio: {<a className={styles.acitos} href={link} rel="noopener noreferrer" target="_blank"> {link} </a>}</p>

                </div>
                <div className={styles.projecto__img__container}>
                    <img src={foto1} alt="priemra foto de mi pagina" />
                    <img src={foto2} alt="segunda foto de mi pagina" />
                </div>

            </div>
        </article>
    )
}

export default UnProjecto;