import heroImage from './Group77.png';

function HeroSection() {
  return (
    <div className="herosection">

        <img src={heroImage} alt="heroImage" className='heroImage'/>

        <h1 className='hero-header'>Online Experiences</h1>

        <div className='herotext'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</div>
    </div>
  );
}

export default HeroSection;