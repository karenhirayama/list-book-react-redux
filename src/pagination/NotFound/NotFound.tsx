import { useNavigate } from "react-router-dom";
import './NotFound.css'
import { ButtonComponent } from "../../components"
import { WarningIcon } from '@chakra-ui/icons';

export const NotFound = () => {
  const navigate = useNavigate();

  const handleHomePage = () => {
    navigate('/');
  }
  return (
    <div className="notFound__container">
      <div className="notFound__title">
        <h1>Page not found</h1>
        <WarningIcon color="teal" w={16} h={16} />
      </div>
      <div className="notFound__comeback">
        <p>Come back to the homepage</p>
        <ButtonComponent buttonText="Back to Homepage" handleClick={handleHomePage} />
      </div>
    </div>
  )
}
