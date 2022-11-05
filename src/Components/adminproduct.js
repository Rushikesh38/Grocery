import './Css/adminForm.css';
import React,{useState} from 'react';

const AdminProduct = () => {

    const [name,setName] = useState("");
    const [url,setUrl] = useState("")
    const [price,setPrice] = useState(0);
    const [description,setDescription] = useState("");



    const onChangeName=(e)=>{
        setName(e.target.value);
    }
    const onChangeUrl=(e)=>{
        setUrl(e.target.value);
    }
    const onChangePrice=(e)=>{
        setPrice(e.target.value);
    }
    const onChangeDes=(e)=>{
        setDescription(e.target.value);
    }


    return (
        <>
            <div className="container adminproduct-heading">
                <h3>Sell your products</h3>
            </div>
            <div className="container admin-form-container">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input onChange={onChangeName} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                        {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Image(URL)</label>
                        <input onChange={onChangeUrl} type="text" class="form-control" placeholder='Image url'/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label" >Price</label>
                        <input onChange={onChangePrice}type="text" class="form-control" placeholder='Rs'/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleInputPassword1" class="form-label">Description</label>
                        <textarea onChange={onChangeDes} name="" id="" cols="10" rows="8" className='product-description' placeholder='Description of product'></textarea>
                        {/* <input type="password" class="form-control" id="exampleInputPassword1"/> */}
                    </div>
                    {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1"> me out</label>
                </div> */}
                    <div className="container adminProduct-btn">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>
                
                {/* Just to check wheeather the state is working or not */}
                {/* {name}
                {url}
                {price}
                {description} */}
            </div>

        </>
    )
}

export default AdminProduct;