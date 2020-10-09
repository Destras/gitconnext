import Head from 'next/head'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import InfoPersonal from '../components/InfoPersonal'
import ProjectosContainer from '../components/ProjectosContainer'
import UnProjecto from '../components/UnProjecto'
import ExperienciaContainer from '../components/ExperienciaContainer'
import UnaExperiencia from '../components/UnaExperiencia'
import Footer from '../components/Footer'

const App = () => {
  useEffect(() => {
    document.getElementById('todo').style.backgroundImage = `url(/static/fondo.png)`
  }, [])
  return (
    <div className='main__container'>
      <Head>
        <title>Portafolios de Juan Ignacio Werkalec</title>
        <link href="data:image/x-icon;base64,AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrTigVtHgo17R4KNe0eChzAAAAAAAAAAAAAAAAAAAAALR4KKy0eCjXt30wpgAAAAAAAAAAAAAAAAAAAAAAAAAAQycAPqZfAPumXwD/pl8AygAAAAAAAAAAAAAAADkhAB2mXwDppl8A/6ZfAPrbvpcHAAAAAAAAAAAAAAAAAAAAAEMnAFOmXwD8pl8A/6ZfAO85IQAbAAAAAAAAAAA5IQAvpl8A8qZfAP+mXwD7276XNgAAAAAAAAAAAAAAAAAAAACmXwB6pl8A/6ZfAPamXwD6OSEALwAAAAAAAAAAkVMAT6ZfAPqmXwD9pl8A/tu+l0wAAAAAAAAAAAAAAAAAAAAApl8AuKZfAP+mXwClpl8A/6ZfAGkAAAAAAAAAAKZfAI+mXwD/pl8ArKZfAP+mXwCMAAAAAAAAAAAAAAAAAAAAAKZfAOmmXwD/pl8AT6ZfAP+mXwCxAAAAAAAAAACmXwDGpl8A9Ld9MFGmXwD/pl8AzQAAAAAAAAAAAAAAAIxQADqmXwD/pl8A+CoYAASmXwDnpl8A6QAAAACCSgAgpl8A/6ZfAKfVtIclpl8A/6ZfAPn59e8BAAAAAAAAAACMUACMpl8A/6ZfALYAAAAApl8Aj6ZfAP+CSgBKgkoAhaZfAP+mXwBPAAAAAKZfAPKmXwD/tHgoOQAAAAAAAAAApl8Az6ZfAP+mXwBqAAAAAH1HADimXwD/pl8AmKZfAMemXwDi9/DnFgAAAACmXwC4pl8A/7R4KH8AAAAALxsAGKZfAN6mXwD/pl8AHAAAAAAQCQAQpl8A6KZfAOemXwDfpl8A0Pfw5xAAAAAApl8AbqZfAP+mXwDV7uHPAy8bADmmXwDspl8A3AUDAAYAAAAAEAkABaZfANCmXwD/pl8A/6ZfALH38OcFAAAAAM2lcCOmXwD/pl8A6ubStxOmXwBUpl8A/6ZfAMYFAwAEAAAAAAAAAABtPgCapl8A/6ZfAP9tPgBwAAAAAAAAAAD8+vcEpl8A6qZfAPTm0rcwpl8AiaZfAP+mXwCeBQMAAgAAAAAAAAAAbT4AUaZfAP+mXwD/bT4APQAAAAAAAAAA/Pr3A6ZfAM+mXwD/sXMgYbR4KKa0eCjXimAoeQAAAAAAAAAAAAAAAJVmKCG0eCjXtHgozQAAAAAAAAAAAAAAAAAAAAC0eCiEtHgo17R4KIsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAOfHAADjxwAA48cAAOPHAADDgwAAyZMAAMmTAACJMwAAnDMAAJw5AACcOQAAnHkAAB55AAA+eAAA//8AAA==" rel="icon" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <div id='todo' className='contenedor__todo'>
        <InfoPersonal />
        <ProjectosContainer>
          <h1 id='projectosContainer' >Mis Projectos</h1>
          <UnProjecto
            nombre='Tweejuan'
            fecha='8/4/2020'
            descripcion={['Mi clon de ', 'Twitter', ' con su propia estetica']}
            link2='https://twitter.com'
            tecnologias='React, Firebase, react-router-dom'
            link='https://tweejuan.web.app'
            foto1='/static/fotoLinda.png'
            foto2='/static/fotoLinda2.png'
          />
          <UnProjecto
            nombre='MercadoJuan'
            fecha='10/6/2020'
            descripcion={['Mi clon de ', 'Mercado Libre', '']}
            link2='https://www.mercadolibre.com.ar/#from=homecom'
            tecnologias='React, Firebase, react-router-dom, React-Context'
            link='https://mercadojuan-cf065.web.app'
            foto1='/static/mercadojuan1.jpg'
            foto2='/static/mercadojuan2.jpg'
          />
          <UnProjecto
            nombre='OP.JJ'
            fecha='7/9/2020'
            descripcion={['Mi clon de ', 'OP.GG', '. Es una pagina de estadísticas para un juego llamado League of Legends. Utiliza la API de esta misma compañía para buscar información, procesarla y mostrarla de forma amigable']}
            link2='https://las.op.gg'
            tecnologias='React, Express'
            link='https://opjj.herokuapp.com/'
            foto1='/static/op-gg1.png'
            foto2='/static/op-gg2.png'
          />
        </ProjectosContainer>
        <ExperienciaContainer>
          <h1 id='projectosContainer'>Mi Experiencias de trabajo</h1>
          <UnaExperiencia></UnaExperiencia>
        </ExperienciaContainer>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App;