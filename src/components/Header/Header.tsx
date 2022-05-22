import './Header.css';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  }

  return (
    <div className='header__container' onClick={handleHomePage}>
      <h1 className='header__title'>Book App</h1>
      <p className='header__text'>Find your book and read</p>
    </div>
  )
}
