import {
    useLocation
} from 'react-router-dom';
import Navbar from '../Components/Header';
import './styles/404.css';

function NotFound({}) {
    let location = useLocation();

    return (
        <div>
        <Navbar/>
          <div className="AppContainer">
          <h2>404</h2>
          <img src="https://media4.giphy.com/media/3o6ZtnCmudwAQCLmhy/giphy.gif"/>
          <p>
            We couldn't find what you were looking for!
          </p>
          </div>
        </div>
    );
}

export default NotFound;