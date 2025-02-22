// import logo from './Vector.png';
// import HeroSection from './HeroSect';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

function Footer() {

  return (
    <div className='footer-container'>
    <div className="footer">
          <div className='name-and-logo'>
            <div><Icon icon="ic:baseline-grass" width="44" height="44" style={{ color: '#87e5ff' }} /></div>
            <div className='logo-text'>DON</div>
          </div>

        <div className='navigation-and-socials'>
        <div className='hero-navigation'>
          <div>+234-903-631-8666</div>
          <a href="mailto:adegboyegajosephdon@gmail.com">adegboyegajosephdon@gmail.com</a>
        </div>

        <div className='navigation-icons'>
            <Icon icon="ri:github-fill" width="30" height="30" />
            <Icon icon="formkit:twitter" width="30" height="30" />
            <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
          </div>
          </div>

    </div>
    
    <hr />

    <div className="footer">
        <nav className='hero-navigation hero-links'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/techstack"> Tech Stack </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/contact"> Contact </Link>
        </nav>

        <div className='developed-and-designed'>
            <div>Developed by <span className='gradient-text'>Josephdon</span></div>
            <div>Designed by <span className='gradient-text'><a href='https://www.figma.com/design/Su9RVJZDbtwG3PZ7VBFB1m/Developer-Portfolio-Design-(Community)?node-id=1-4&t=2B6Ss4aROUXRPNaq-0' target="_blank" rel='noreferrer'>Pavan MG</a></span> with Love & Coffee</div>
          </div>

    </div>
    </div>

  );
}

export default Footer;