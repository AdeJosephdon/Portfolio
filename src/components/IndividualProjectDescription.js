import { useState, useContext } from "react";
import { DataContext } from "./DataContext";
import { Link, useParams } from 'react-router-dom';
import PageStructure from './PageStructure';


function IndividualProjectDescription() {

  const { data } = useContext(DataContext);

  // console.log("Sata",data)

  const { productId } = useParams();

  const productid = parseInt(productId, 10)


  const itemDescribed = data.filter(prod => prod.id === productid); 

  const randomItem = itemDescribed[0] 

  // console.log("randomItem", randomItem)

  // Image switch
  const images = randomItem.description_images;
  const [currentIndex, setCurrentIndex] = useState(1);

  const moveLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const moveRight = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  return (

    <PageStructure>
      {data ? ( <main className="actual-item-main-container">

        <div className="cart-route"><span><Link to="/">Home / </Link> </span> {randomItem.title}</div>

        <h1 className="individual-item-title"> <a href={randomItem.live_preview} target="_blank" rel="noreferrer"> {randomItem.title} </a></h1>

        <div className='item-properties'>
          <div className="carousel-container">
            <div className="item-image-container">
              {images.map((image, index) => {
                const position = (index - currentIndex + images.length) % images.length;
                return (
                  <div key={index} className={`image-wrapper position-${position}`}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                  </div>
                );
              })}
            </div>

            <div className="carousel-container-buttons">
              <button onClick={moveLeft} className="nav-button carousel-container-left">&#8249;</button>
            <button onClick={moveRight} className="nav-button carousel-container-right">&#8250;</button>
            </div>
          </div>

          <div className='item-description'>
            <h2 className="item-description-title"><a href={randomItem.live_preview} target="_blank" rel="noreferrer"> {randomItem.title} </a></h2>

            <div>
              {randomItem.large_description}
            </div>

          </div>

        </div>

        <p className="individual-item-code"> <a href={randomItem.view_code} target="_blank" rel="noreferrer"> <button className="individual-item-code-button"> Click here to view source code </button></a></p>

        <section className="other-comments">
              
              <p>
            With this project I was able to practice concepsts like:

              </p>

            <ul>
              {randomItem.concepts_practised.map(concept => 
              <li>{concept}</li>
                
              )}
              <li>and so much more.</li>
              <li ><a href={randomItem.live_preview} target="_blank" rel="noreferrer" className="project-body-link">Check the live preview here.</a> </li>
              <li><a href={randomItem.view_code} target="_blank" rel="noreferrer" className="project-body-link">Check the source code here.</a> </li>
            </ul>

        </section>




      </main> 
      ) : (
        <main>Loading...</main> 
      )}


    </PageStructure>
      


  );
}

export default IndividualProjectDescription;