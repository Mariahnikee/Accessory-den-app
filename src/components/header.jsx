import logo from '../images/watch1.png';
import "./header.css";

export const Header = () => {
  return (
    <header className="headerNav">
      <div className="card">
        <div className='card-description'>
          <p className='details'>Grab up to 20% discount on <br></br>selected Wrist Watch</p>
          <button className='card-button'>Shop Now</button>
        </div>
        <div className='card-img'>
          <img src={logo} alt='Logo' className='card-image' />
        </div>
      </div>
    </header>
  );
};
