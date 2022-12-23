import Amount from './inc_dec';
import * as api from '../../api';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Cards({item}) {
    const { name, image, price, description } = item;
    const [amount, setAmount] = useState(1);
    const location = useLocation();
    const isCart = location.pathname.includes('/cart');

    function handlecartclick() {
      const cartitem={
        name:item.name,
        price:item.price,
        quantity:amount,        
      }

      try{
        api.addCartItem(cartitem);
      }catch(error){
        console.log(error.message);
      }
    }
    
    return (
        <>       
         <div className="mb-2">
           <div className="card" style={{ width: "18rem" }}>
             <h5 className="card-title card-body">{name}</h5>
             {!isCart && <img className="img-fluid card-img-top" src={image} alt="Card image cap" />}
             <div className="card-body">
               <p className="card-text">{description}</p>
               <p className="card-text">Price:{price} </p>
               <Amount amount={isCart ? item.quantity : amount} setAmount={setAmount} />               
               {!isCart && <button className="btn btn-primary mt-2" onClick={handlecartclick} >Add to cart</button>}
             </div>
          </div>
        </div>

        </>
    )
}
export default Cards;

