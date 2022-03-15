import { useContext, useEffect } from "react";
import { useState } from "react";
import { CounterContext } from "../context/CounterContext";
import Product from "./Product";
const Main = () => {
   const [table,setTable] = useState([]);
   const [isReady,setIsReady] = useState(false);
    useEffect(()=>{
      fetch("https://fakestoreapi.com/products?limit=5")
      .then((res)=> res.json())
      .then((json)=> {
        setTable(json)
        setIsReady(true)
      })
    },[])
    return (
        <main className="main">
          {isReady === true ? 
           table.map((elem)=>{
             return(
             <Product key={elem.id} title={elem.title} id={elem.id} desc={elem.description} price={elem.price} img={elem.image}></Product>
             )
           }) : "Loading..."}

        </main>
      );
}
 
export default Main;