import "./../styles/HeroSection.css"
import TypeWriter from './TyperWriter';

function HeroSection() {
  return (
      <div className='hero-section'> 
      <div className='hero-introduction'>
        <div>Hi 👋,</div>
        <div>My name is </div>
        <div className='josephdon-name'>Adegboyega Joseph</div>
        {/* <div className="desktop-typewriter">I'm in love with <TypeWriter /></div> */}
        <div className="mobile-typewriter">
        <div >I'm in love with </div>
        <TypeWriter />
        </div>
      </div>

      <div className='picture-container'>
<img src='/portfolio picture.jpg' alt='Josephdon'/>
      </div>
      
      {/* <TyperWriter /> */}
      </div>
  );
}

export default HeroSection;