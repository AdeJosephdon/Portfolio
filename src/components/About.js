// import logo from './Vector.png';
// import HeroSection from './HeroSect';
import { Icon } from '@iconify/react/dist/iconify.js';
// import { Link } from 'react-router-dom';
import PageStructure from './PageStructure';
// import Header from './Header';

function About() {


  return (
    <PageStructure>

    <main className="about">
      <h1>About Me</h1>

      <div className="about-me">
        <p>
          I am a Frontend Developer with a petroleum engineering background, bringing an analytical mindset to building purposeful, responsive, and interactive web applications.
        </p>
        <p>
          My projects solve real-world problems, from streamlining information retrieval to enhancing data analysis.
        </p>
        <p>
          I have completed the freeCodeCamp React course and am currently developing a fully functional React e-commerce platform, refining my skills in authentication, payment integration, and real-time analytics.
        </p>
      </div>


      <h1>Work Experience</h1>

      <div className='experience-container'>
        <div className='experience'>
          <div className='title-and-position'>
            <div className='title'>
              Drilling Engineering Intern
            </div>
            <div className='position'>
              Internship
            </div>
          </div>

          <div className='company-location-time'>
            <div className='company-and-location'>
              <span className='centralize'>
                <span>
                <Icon icon="mdi:office-building" width="24" height="24" />
                </span>
                <span>
                  TotalEnergies EP Nigeria Limited
                </span>
                </span>
              <span className='centralize'>
              <span>
                <Icon icon="tdesign:location" width="24" height="24" />
              </span>
              <span>Lagos, Nigeria</span>
            </span>
            </div>
            <div className='time centralize'>
              <span>
                <Icon icon="fontisto:date" width="24" height="24" />
              </span>
              <span>Sept 2022 - Feb 2023</span>
            </div>
          </div>

        </div>
        <div className='experience'>
          <div className='title-and-position'>
            <div className='title'>
              Plant Operation Intern
            </div>
            <div className='position'>
              Internship
            </div>
          </div>

          <div className='company-location-time'>
            <div className='company-and-location'>
              <span className='centralize'>
                <span>
                  <Icon icon="mdi:office-building" width="24" height="24" />
                </span>
                <span>NNPC Gas Infrastructure Company</span>
              </span>
              <span className='centralize'>
                <span>
                  <Icon icon="tdesign:location" width="24" height="24" />
                </span>
                <span>Lagos, Nigeria</span>
              </span>
            </div>
            <div className='time centralize'>
              <span>
                <Icon icon="fontisto:date" width="24" height="24" />
              </span>
              <span>May 2023 - Sept 2023</span>
            </div>
          </div>

        </div>
      </div>

      <h1>Education</h1>

        <div className='education-container'>
          <div className='education'>

          <div className='title-and-position'>
            <div className='title'>
              BSc in Petroleum and Gas Engineering.
            </div>
            <div className='position'>
              Full Time
            </div>
          </div>

          <div className='company-location-time'>
            <div className='company-and-location'>
              <span className='centralize'>
                <span>
                  <Icon icon="fxemoji:graduationcap" width="24" height="24" />
                </span>
                <span>Second-Class Upper Division</span>
              </span>
              
              <span className='centralize'>
                <span>
                  <Icon icon="mdi:office-building" width="24" height="24" />
                </span>
                <span>University of Lagos</span>
              </span>
              
            </div>

            <div className='time centralize'>
              <span>
                <Icon icon="fontisto:date" width="24" height="24" />
              </span>
              <span>Jan 2018 - Jan 2025</span>
            </div>

          </div>

          </div>

        </div>


    </main>
    </PageStructure> 
  );
}

export default About;