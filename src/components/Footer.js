import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import "./../styles/Footer.css"


function Footer() {

  return (
    <div className='footer-container'>
    <div className="footer">
          <div className='name-and-logo'>
            <div><Icon icon="ic:baseline-grass" width="44" height="44" style={{ color: '#87e5ff' }} aria-label="Don's Logo"/></div>
            <div className='logo-text'>DON</div>
          </div>

        <div className='navigation-and-socials'>
        <div className='hero-navigation'>
          <a href='https://wa.me/qr/XEJKCWVKZV3BL1' target="_blank" rel='noreferrer' aria-label="Message me on Whatsapp"><div>+234-903-631-8666</div></a>
          <a href="mailto:adegboyegajosephdon@gmail.com">adegboyegajosephdon@gmail.com</a>
        </div>

        <div className='navigation-icons'>
          <a href='https://github.com/AdeJosephdon' target="_blank" rel='noreferrer'aria-label="View Github Page">
            <Icon icon="ri:github-fill" width="30" height="30" />
          </a>
          <a href='https://wa.me/qr/XEJKCWVKZV3BL1' target="_blank" rel='noreferrer' aria-label="Message me on Whatsapp">
            <Icon icon="ic:sharp-whatsapp" width="30" height="30" />
          </a>
          <a href='https://www.linkedin.com/in/adegboyega-joseph-444b36164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel='noreferrer' aria-label="View Linkedin Page">
            <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
          </a>
        </div>
          </div>

    </div>
    
    <hr />

    <div className="footer">
        <nav className='hero-navigation hero-links'>
          <Link to="/" aria-label="View Home page"> Home </Link>
          <Link to="/about" aria-label="View About page"> About </Link>
          <Link to="/techstack" aria-label="View Tech Stack page"> Tech Stack </Link>
          <Link to="/projects" aria-label="View Projects page"> Projects </Link>
          <Link to="/contact" aria-label="View Contact page"> Contact </Link>
        </nav>

        <div className='developed-and-designed'>
            <div>Developed by <span className='gradient-text'>Josephdon</span></div>
            <div>Designed by <span className='gradient-text'><a href='https://www.figma.com/design/Su9RVJZDbtwG3PZ7VBFB1m/Developer-Portfolio-Design-(Community)?node-id=1-4&t=2B6Ss4aROUXRPNaq-0' target="_blank" rel='noreferrer'
            aria-label="Go to designer Pavan MG's figma page"
            >Pavan MG</a></span> with Love & Coffee</div>
          </div>

    </div>
    </div>

  );
}

export default Footer;