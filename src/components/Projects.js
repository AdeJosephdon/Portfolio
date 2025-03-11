import PageStructure from './PageStructure';
import { useContext } from "react";
import { DataContext } from "./DataContext";
import IndividualProject from './Individual Project';


function Projects() {

    const { data } = useContext(DataContext);
    

    const projectsMapped = data.map((project) => (
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

    <main className="projects">

      <h1>My Projects</h1>
      <h3> Things I've built so far</h3>
      <p> Project details available upon click.</p>

      <div className='projects-container projects-page-container '> 

        {projectsMapped}

      </div>
    </main>
    </PageStructure> 
  );
}

export default Projects;