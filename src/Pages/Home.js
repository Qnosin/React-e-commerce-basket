import Header from '../components/Header';
import Main from '../components/Main';
import { useContext, useState } from 'react';
import { CounterContext} from '../context/CounterContext';
import BasketPage from './BasketPage';
import { BasketContext } from '../context/BasketContext';
const Home = () => {
    const [counter,setCounter] = useState(0)
    return ( 
        <div className='App'>
             <CounterContext.Provider value={{counter,setCounter}}>
                <Header></Header>
                <Main></Main>
            </CounterContext.Provider>
        </div>
     );
}
 
export default Home;