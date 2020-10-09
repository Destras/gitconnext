import React from 'react'
import styles from '../public/components/ExperienciaContainer.module.scss'

const ExperienciaContainer = ({children}) => {
    return (
        <section id='experiencia' className={styles.experienciaContainer}>
            {children}
        </section>
    )
}

export default ExperienciaContainer