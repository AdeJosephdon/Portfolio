import { Icon } from '@iconify/react/dist/iconify.js';
import { useContext } from "react";
import { DataContext } from "./DataContext";
import PageStructure from './PageStructure';
import IndividualProject from './Individual Project';


function Home({isDark, colorMode}) {

    const { data } = useContext(DataContext);
    

    const projectsMapped = data.slice(0,3).map((project) => (
      <IndividualProject 
      key={project.id} 
      id={project.id} 
      large_description = {project.large_description}
      image = {project.image}
      small_description= {project.small_description}
      tech_stack= {project.tech_stack}
      live_preview = {project.live_preview}
      title = {project.title}
      view_code = {project.view_code}
      productObject = {project}
/>))

  return (

    <PageStructure>

    <main className="home">
      <div className='hero-section'> 
      <div className='hero-introduction'>
        <div>Hi 👋,</div>
        <div>My name is </div>
        <div className='josephdon-name'>Adegboyega Joseph</div>
        <div>I'm in love with <span className='josephdon-name'>JavaScript</span></div>
      </div>

      <div className='picture-container'>
<img src='/portfolio picture.jpg' alt='Josephdon'/>
      </div>
      


      </div>

      <div className='techstack-container'>
        <h1>My Tech Stack</h1>
        <h3> Technologies I've been working with recently</h3>

        <div className='technologies-container'> 
          <button className='technology'><Icon icon="devicon:html5-wordmark" width="60" height="60" /></button >
          <button className='technology'><Icon icon="devicon:css3-wordmark" width="60" height="60" /></button>
          <button className='technology'><Icon icon="devicon:javascript" width="60" height="60" /></button>
          <button className='technology'><Icon icon="devicon:react-wordmark" width="60" height="60" /></button>
          <button className='technology'><Icon icon="devicon:d3js" width="60" height="60" /></button>
          <button className='technology mathjax'><Icon icon="file-icons:mathjax" width="60" height="60" /></button>

        </div>
      </div>

      <div className='projects-outer-container'>
        <h1>My Projects</h1>
        <h3> Things I've built so far</h3>

        <div className='projects-container'> 
          {projectsMapped}
        </div>
      </div>

      <button className='day-night-switch' onClick={colorMode}>

        {isDark ? 
<Icon icon="meteocons:clear-day-fill" width="24" height="24" />
:
<Icon icon="game-icons:night-sky" width="24" height="24" />}
      </button>


    </main>
    </PageStructure> 

  );
}

export default Home;