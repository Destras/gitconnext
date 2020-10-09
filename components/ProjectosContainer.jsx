import React from 'react';
import styles from '../public/components/ProjectosContainer.module.scss'

const ProjectosContainer = ( { children } ) => {
    return(
        <section className={styles.projectos__container__container}>
            { children }
        </section>
    )
}

export default ProjectosContainer;