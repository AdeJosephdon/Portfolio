import { useRef } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';

function Header() {
  // console.log(prop)

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

  return (
    <div className="header">
          <div className='name-and-logo'>
            <div><Icon icon="ic:baseline-grass" width="44" height="44" style={{ color: '#87e5ff' }} /></div>
            <div className='logo-text'>DON</div>
          </div>

          <button className='nav-socials-icon'
          onClick={showNavbar}
          ><Icon icon="fluent:navigation-24-filled" width="24" height="24" />
          </button>

        <div ref={navRef} className='hero-navvy responsive_nav'>
        <nav className='hero-navigation'>
          <Link to="/"> Home </Link>
          <Link to="/about"> About </Link> 
          <Link to="/techstack"> Tech Stack </Link>
          <Link to="/projects"> Projects </Link>
          <Link to="/contact"> Contact </Link>
        </nav>


          
        <div className='navigation-icons'>
          <a href='www.google.com' target="_blank" rel='noreferrer'>
            <Icon icon="ri:github-fill" width="30" height="30" />
          </a>
          <a href='www.google.com' target="_blank" rel='noreferrer'>
            <Icon icon="formkit:twitter" width="30" height="30" />
          </a>
          <a href='www.google.com' target="_blank" rel='noreferrer'>
            <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
          </a>
        </div>

        <div className='nav-button-container'>
        <button className='nav-socials-icon close-nav'
          onClick={showNavbar}
          >
            <Icon icon="proicons:filter-cancel" width="24" height="24" />
        </button>
        </div>

        </div>

        {/* <HeroSection />         */}
    </div>
  );
}

export default Header;