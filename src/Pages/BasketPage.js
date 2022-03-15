import { useContext, useState } from "react";
import Header from "../components/Header";
import Shop from "../components/Shop";
import { BasketContext } from "../context/BasketContext";
const BasketPage = () => {
    const {basket,setBasket} = useContext(BasketContext);
    const [price,setPrice] = useState(0);
    return (
        <div className="App">
        <Header></Header>
            <section className="content">
                <Shop price={price} setPrice={setPrice} basket={basket} setBasket={setBasket}></Shop>
            </section>
            <div className="total__Price">total price: {price}$</div>
        </div>
      );
}
 
export default BasketPage;