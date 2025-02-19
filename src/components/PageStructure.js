import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
// import Footer from './Footer';
// import { DataContext } from "./DataContext";

// import MainBody from './MainBody';


function PageStructure({children}) {

  const location = useLocation(); 

  return (
    <div className="page-structure">

      <Header />

      {children}


      {
        !(location.pathname === '/about' || location.pathname === '/techstack') && <Footer />
      }

        
    </div>
  );
}

export default PageStructure;