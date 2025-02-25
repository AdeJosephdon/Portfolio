// import logo from './Vector.png';
// import HeroSection from './HeroSect';
// import { Icon } from '@iconify/react/dist/iconify.js';
import { Link } from 'react-router-dom';
import PageStructure from './PageStructure';

function NotFoundPage() {


  return (
    <PageStructure>

    <main className="error-page">
        <div className="error-container"> 
        <p className="error-text">404 Not Found </p>
        <div className="error-smaller-text">Your visited page not found. You may go home page. </div>


        <Link to="/" >
        <button className="individual-item-code-button"
        aria-label="Go Back TO Home Page"
        >
            Back to home page 
        </button>
        </Link>


        </div>
    </main>
    </PageStructure> 
  );
}

export default NotFoundPage;