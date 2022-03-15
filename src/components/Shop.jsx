import { faFireExtinguisher } from '@fortawesome/free-solid-svg-icons'
import ShopItem from './ShopItem'

const Shop = ({basket,setBasket,price,setPrice}) => {
    let sum = 0
    basket.forEach((element)=>{
        sum += element.price;
    })
    setPrice(Math.floor(sum))
    return (
         basket.map((element,index)=>{
            return(
             <ShopItem setBasket={setBasket} key={index} basket={basket} valueId={index} element={element}></ShopItem>
            );
        })
     );
}
 
export default Shop;