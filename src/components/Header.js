// import logo from './Vector.png';
// import HeroSection from './HeroSect';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

function Header() {
    // console.log(prop)
  return (
    <div className="header">
          <div className='name-and-logo'>
            <div><Icon icon="ic:baseline-grass" width="44" height="44" style={{ color: '#87e5ff' }} /></div>
            <div className='logo-text'>DON</div>
          </div>

        <div className='navigation-and-socials'>
        <nav className='hero-navigation'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link>
          <Link to="/techstack"> Tech Stack </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/contact"> Contact </Link>
        </nav>

        <div className='navigation-icons'>
            <Icon icon="ri:github-fill" width="30" height="30" />
            <Icon icon="formkit:twitter" width="30" height="30" />
            <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
          </div>
          </div>

        {/* <HeroSection />         */}
    </div>
  );
}

export default Header;