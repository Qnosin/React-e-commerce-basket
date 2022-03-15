import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
const ShopItem = ({element,basket,valueId,setBasket}) => {

    const handleDelete = (e) =>{
        let id = e.target.parentElement.parentElement.getAttribute('id');
        const filteredArray = basket.filter((element,index)=>{
            return index !== Number(id)
        })
        setBasket(filteredArray)
    }
    
    return (
        <section className="shop__item" id={valueId} key={element.id}>
        <div className="image__item"><img src={element.img} alt="image" /></div>
        <div className="title__item">{element.title}</div>
        <div className="price__item">{element.price}$</div>
        <div className='operation'>
            <div className="Delete__shop" onClick={(e)=>handleDelete(e)}>Delete</div>
        </div>
    </section>
      );
}
 
export default ShopItem;