import { useRef, useState } from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import "./../styles/Header.css"


function Header() {
  // console.log(prop)

  const [navShown, setNavShown] = useState(false)

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);

    if (navRef.current && navRef.current.classList.contains("responsive_nav")) {
      setNavShown(true)
    } else {
        setNavShown(false)
    }
	};



  return (
    <div className="header">
          <div className='name-and-logo'>
            <div><Icon icon="ic:baseline-grass" width="44" height="44" style={{ color: '#87e5ff' }} /></div>
            <div className='logo-text'>DON</div>
          </div>

          <button className='nav-socials-icon'
          onClick={showNavbar}
          aria-hidden={navShown ? "true" : "false"}
          tabindex={navShown ? "-1" : "0"}
          aria-label="Open Nav or Menu Bar"
          ><Icon icon="fluent:navigation-24-filled" width="24" height="24" />
          </button>

        <div ref={navRef} className='hero-navvy responsive_nav'
        role={navShown ? "menu" : ""}
        >
        <nav className='hero-navigation'>
          <Link to="/" role={navShown ? "menuitem" : ""} aria-label="View Home page"> Home </Link>
          <Link to="/about" role={navShown ? "menuitem" : ""} aria-label="View About page"> About </Link> 
          <Link to="/techstack" role={navShown ? "menuitem" : ""} aria-label="View Tech Stack page"> Tech Stack </Link>
          <Link to="/projects" role={navShown ? "menuitem" : ""} aria-label="View Projects page"> Projects </Link>
          <Link to="/contact" role={navShown ? "menuitem" : ""} aria-label="View Contact page"> Contact </Link>
        </nav>


          
        <div className='navigation-icons'>
          <a href='https://github.com/AdeJosephdon' target="_blank" rel='noreferrer'role={navShown ? "menuitem" : ""}  aria-label="View Github Page">
            <Icon icon="ri:github-fill" width="30" height="30" />
          </a>
          <a href='https://wa.me/qr/XEJKCWVKZV3BL1' target="_blank" rel='noreferrer' role={navShown ? "menuitem" : ""} aria-label="Message me on Whatsapp">
            <Icon icon="ic:sharp-whatsapp" width="30" height="30" />
          </a>
          <a href='https://www.linkedin.com/in/adegboyega-joseph-444b36164?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target="_blank" rel='noreferrer' role={navShown ? "menuitem" : ""} aria-label="View Linkedin Page">
            <Icon icon="entypo-social:linkedin-with-circle" width="30" height="30" />
          </a>
        </div>

        <div className='nav-button-container'>
        <button className='nav-socials-icon close-nav'
          onClick={showNavbar}
          tabindex={navShown ? "0" : "-1"}
          aria-label="Close Nav or Menu Bar"
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