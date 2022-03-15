
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { CounterContext } from "../context/CounterContext";
const Product = ({title,id,desc,price,img}) => {
    let {setCounter,counter} = useContext(CounterContext);
    let {setBasket,basket} = useContext(BasketContext);
    const clickHandle = (e)=>{
        const list = [...e.target.parentNode.childNodes];
        list.map((elem,index)=>{
            if(index === 1){
                const title = elem.textContent
            }else if(index === 2){
                const desc = elem.textContent
            }else if(index === 3){
                const price = elem.textContent
            }else if(index === 0){
                const img = elem.children[0].src
            }
        })
        const product = {
            "title" : title,
            "desc" : desc,
            "price" : price,
            "img" : img
        }
        setBasket(basket => [...basket,product])
    }
    const choseId = (id)=>{
        if(id === 5){
            return "presentation bigT";
        }else if(id === 2){
            return "presentation mediumT"
        }else if(id === 4){
            return "presentation smallT"
        }
    }
    return (
        <section className="product" basketid={id}>
            <div className={choseId(id)}><img src={img} alt="imageOfProduct" /></div>
            <div className="title">{title}</div>
            <div className="description">{desc}</div>
            <div className="price">{price}$</div>
            <div className="add" onClick={(e) => clickHandle(e)}>Add to Basket</div>
        </section>
      );
}
 
export default Product;