// import logo from './Vector.png';
// import HeroSection from './HeroSect';
import { Icon } from '@iconify/react/dist/iconify.js';
// import { Link } from 'react-router-dom';
import PageStructure from './PageStructure';


function TechStack() {


  return (
    <PageStructure>

    <main className="tech-stack-main">
      
      <div className='tech techstack-container'>
        <h1>My Tech Stack</h1>
        <h3> Technologies I've been working with recently</h3>

        <div className='tech-container technologies-container'> 
          <button className='technology' aria-label="View all my HTML projects"><Icon icon="devicon:html5-wordmark" width="60" height="60" /></button >
          <button className='technology' aria-label="View all my CSS projects"><Icon icon="devicon:css3-wordmark" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my JavaScript projects"><Icon icon="devicon:javascript" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my React projects"><Icon icon="devicon:react-wordmark" width="60" height="60" /></button>
          <button className='technology' aria-label="View all my D3.js projects"><Icon icon="devicon:d3js" width="60" height="60" /></button>
          <button className='technology mathjax' aria-label="View all my Mathjax projects"><Icon icon="file-icons:mathjax" width="60" height="60" /></button>


        </div>
      </div>

    </main>
    </PageStructure> 
  );
}

export default TechStack;