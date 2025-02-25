// import logo from './Vector.png';
// import HeroSection from './HeroSect';
// import { Icon } from '@iconify/react/dist/iconify.js';
// import { Link } from 'react-router-dom';
import PageStructure from './PageStructure';

function Contact() {


  return (
    <PageStructure>

    <main className="contact">
      <p>Please mail me @:</p>
      <p><a href="mailto:adegboyegajosephdon@gmail.com"
      aria-label="Send an email to adegboyegajosephdon@gmail.com"
      >adegboyegajosephdon@gmail.com</a></p>

    </main>
    </PageStructure> 
  );
}

export default Contact;