import './Css/adminForm.css';
import React,{useState} from 'react';
import * as api from "../api"

const Owner = () => {

    const [item,setItem] = useState({Dish: "",
        Ingredients: ""
    });

    function handleChange(e) {
        setItem((item) => ({ ...item, [e.target.name]: e.target.value }));
        //console.log(item)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const itemdata = {            
            Dish: item.Dish,
            Ingredients: item.Ingredients,                           
        };
        
        // console.log(itemdata);
        
        try {
            api.createOwnerItems(itemdata);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <div className="container adminproduct-heading">
                <h3>Enter your Magical Recipe</h3>
            </div>
            <div className="container admin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Dish</label>
                        <input onChange={handleChange} type="text" className="form-control" name="Dish" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Dish Name'/>
                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                    </div>                    
                    <div className="mb-3 ">
                        <label htmlFor="exampleInputPassword1" className="form-label">Ingredients</label>
                        <textarea onChange={handleChange} name="" id="" cols="10" rows="8" name="Ingredients" className='product-description' placeholder='Format: item1, num1, item2, num2,...'></textarea>
                        {/* <input type="password" className="form-control" id="exampleInputPassword1"/> */}
                    </div>                    
                    <div className="container adminProduct-btn">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Owner;