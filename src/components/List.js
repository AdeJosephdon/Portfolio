import listImage from './image 12.png';
import star from './Star 1.png';

function ListItems() {
  return (
    <div className="listItems">
        <div className='listItem1'>
        <div>
        <img src={listImage} alt="listImage" />
        </div>
        <small><img src={star} alt="listImage" /> 5.0 (6).USA</small>

        <div>Life lessons with Katie Zaferes</div>
        <div>From $136 / person</div>
        </div>
        
    </div>
  );
}

export default ListItems;