import { Icon } from '@iconify/react/dist/iconify.js';
import { Link} from 'react-router-dom';


function IndividualProject(prop) {


  return (
      
      <button className='individual-project'
      aria-label={`View my ${prop.title}`}
      >
        <Link to={`/individualprojectdescription/${prop.id}`}>
        
        <div className='individual-project-div'>
            <div className='project-image-container'>
                  <img src={prop.image} alt={prop.title} 
                  />
                  </div>
      
                  <div className='individual-project-without-image'>
                  <div className='project-title'>
                    {prop.title}
                  </div>
      
                  <div className='project-description'>
                    This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content
                    {/* {prop.small_description} */}
                  </div>
      
                  <div className='project-tech-stack'>
                    <p>Tech stack : <span>{prop.tech_stack.join(', ')} </span></p>
                  </div>
      
                  <div className='project-links'>
                  
                    <div className='links'> <a href={prop.live_preview} target='_blank' rel='noreferrer' 
                    aria-label={`View my ${prop.title} Web Application` }
                    ><Icon icon="line-md:link" width="24" height="24" />  Live Preview</a></div>
                    <div className='links'> <a href={prop.view_code} target='_blank' rel='noreferrer'
                    aria-label={`View my ${prop.title} Web Application source code` }
                    > <Icon icon="devicon:github" width="24" height="24" />View Code</a></div>
                  </div>
      
                    </div>
        </div>
        
        </Link>
      </button>
  );
}

export default IndividualProject;