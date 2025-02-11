// import logo from './Vector.png';
// import HeroSection from './HeroSect';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

function Header(prop) {
    console.log(prop)
  return (
    <div className="header">
        <div className='name-logo-container'>
          <div className='name-braces'>{"{"}</div>
          <div className='name-and-logo'>
            <Icon icon="ic:outline-grass" width="24" height="24" />
            <div>The Don</div>
          </div>
          <div className='name-braces'>{"}"}</div>
        </div>

        <nav className='hero-navigation'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/techstack"> Tech Stack </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/contact"> Contact </Link>

          <div className='navigation-icons'>
            <Icon icon="ri:github-fill" width="24" height="24" />
            <Icon icon="formkit:twitter" width="14" height="14" />
            <Icon icon="entypo-social:linkedin-with-circle" width="24" height="24" />
          </div>
        </nav>

        {/* <HeroSection />         */}
    </div>
  );
}

export default Header;