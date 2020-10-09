import React from 'react';
import styles from '../public/components/InfoPersonal.module.scss';

const InfoPersonal = () => {
    return (
        <section id='infoPersonal' className={styles.infoPersonal__container}>
            <div>
                <div className={styles.infoPersonal__info__container}>
                    <div className={styles.palabras__container}>
                        <p className={styles.myName}>
                            Juan Ignacio Werkalec
                        </p>
                        <p>
                            Formación en JS, React, Redux, HTML, CSS, Responsive Design, servidor con Express.
                        </p>
                        <p>
                            Interesado en front-end web development y programación en JS.
                        </p>
                    </div>
                    <div>
                        <img src='/static/flor.jpg' alt="foto mia" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoPersonal;