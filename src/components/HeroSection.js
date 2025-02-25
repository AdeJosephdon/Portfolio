function HeroSection() {
  return (
      <div className='hero-section'> 
      <div className='hero-introduction'>
        <div>Hi 👋,</div>
        <div>My name is </div>
        <div className='josephdon-name'>Adegboyega Joseph</div>
        <div>I'm in love with <span className='josephdon-name'>JavaScript</span></div>
      </div>

      <div className='picture-container'>
<img src='/portfolio picture.jpg' alt='Josephdon'/>
      </div>
      
      </div>
  );
}

export default HeroSection;