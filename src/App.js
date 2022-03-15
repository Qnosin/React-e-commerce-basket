import Home from "./Pages/Home";
import { useState } from 'react';
import { CounterContext} from './context/CounterContext';
import ErrorPage from './Pages/ErrorPage';
import BasketPage from './Pages/BasketPage';
import Product from "./components/Product";
import {BasketContext} from './context/BasketContext'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  const [basket,setBasket] = useState([]);
  return (
    <Router>
      <BasketContext.Provider value={{basket,setBasket}}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/basket' element={<BasketPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>
        </BasketContext.Provider>
    </Router>
  );
}

export default App;
