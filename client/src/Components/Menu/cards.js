import Amount from './inc_dec';

function Cards({item,handlecartclick}) {
    const { name, image, price, description } = item;
    // console.log("here:")
    // console.log(item.name)
    return (
        <>       
         <div className="">
           <div className="card" style={{ width: "18rem" }}>
             <h5 className="card-title card-body">{name}</h5>
             <img className="img-fluid card-img-top" src={image} alt="Card image cap" />
             <div className="card-body">
               <p className="card-text">{description}</p>
               <p className="card-text">Price:{price} </p>
               <Amount />
               <button className="btn btn-primary">Buy Now</button>
               <button onClick={handlecartclick(item.name)} >Add to cart</button>
             </div>
          </div>
        </div>

        </>
    )
}
export default Cards;

// function Cards({ item }) {
//     const { name, image, price, description } = item;
//     return (
//       <div className="container">
//         <h1>Cards</h1>
//         <div class="container d-flex align-items-center">
//           <div className="card" style={{ width: "18rem" }}>
//             <h5 className="card-title card-body">{name}</h5>
//             <img className="card-img-top" src="MernProject.png" alt="Card image cap" />
//             <div className="card-body">
//               <p className="card-text">{description}</p>
//               <p className="card-text">Price:{price} </p>
//               <a href="#" class="btn btn-primary">Buy Now</a>
//             </div>
//           </div>
//         </div>
//       </div>
  
//     );
//   }
  
//   export default Cards;