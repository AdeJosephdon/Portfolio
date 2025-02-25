import { Icon } from '@iconify/react/dist/iconify.js';
import { useContext } from "react";
import { DataContext } from "./DataContext";
import PageStructure from './PageStructure';
import IndividualProject from './Individual Project';
import HeroSection from './HeroSection';


function Home() {

    const { data ,isDark , colorMode} = useContext(DataContext);
    

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

    <HeroSection />

      <div className='techstack-container'>
        <h1>My Tech Stack</h1>
        <h3> Technologies I've been working with recently</h3>

        <div className='technologies-container'> 
          <button className='technology' aria-label="View all my HTML projects"><Icon icon="devicon:html5-wordmark" width="60" height="60" /></button >
          <button className='technology' aria-label="View all my CSS projects"><Icon icon="devicon:css3-wordmark" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my JavaScript projects"><Icon icon="devicon:javascript" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my React projects"><Icon icon="devicon:react-wordmark" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my D3.js projects"><Icon icon="devicon:d3js" width="60" height="60" /></button>
          <button className='technology mathjax' aria-label="View all my Mathjax projects"><Icon icon="file-icons:mathjax" width="60" height="60" /></button>

        </div>
      </div>

      <div className='projects-outer-container'>
        <h1>My Projects</h1>
        <h3> Things I've built so far</h3>

        <div className='projects-container'> 
          {projectsMapped}
        </div>
      </div>

      <button className='day-night-switch' onClick={colorMode} 
      aria-label=
      {isDark ? 
        "Switch to Light Mode" :
        "Switch to Dark Mode" 
      } 
      >

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