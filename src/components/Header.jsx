//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { CounterContext } from "../context/CounterContext";
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const {counter} = useContext(CounterContext);
  let navigate = useNavigate()
  const clickHandle = ()=>{
    navigate('/');
  }
  const basketHandle = ()=>{
      navigate('/basket');
  }
    return (
        <header className="Header">
          <h2 onClick={clickHandle}>SmartShop</h2>
          <nav>
            <i onClick={basketHandle} className='basket'><FontAwesomeIcon icon={ faBasketShopping } size="2x"></FontAwesomeIcon> <i className='counter'></i> </i>
          </nav>
        </header>
      );
}
 
export default Header;