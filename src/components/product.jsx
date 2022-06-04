import './product.css';
import QuantityPicker from './quantityPicker';
import { useState } from 'react'; //useState function allows us to define an internal variable in a function

// function Product(){
//     return(<div className='product'>

//     </div>);
// }

//Arrow function: this is sort of an anonymous function as it is not named, therefore we use a constant variable so something can be stored.

//in jsx files, the 'this' instruction may not work in normal functions, but they will always work in arrow functions.

const Product = (props) => {
    let [quantity, setQuantity] = useState(1);



    let onQuantityChange = (value) => { //onQuantityChange receives a value, then uses that value to update the quantity.
        //use the value to update the quantity
        setQuantity(value);
    };

    //add a function to return the total. Total = price*quantity
    const getTotal = () => {
        let total = props.data.price * quantity;
        return total.toFixed(2); //the toFixed(2) function will restrict the number of numbers after the decimal point to two.
    };

    return(<div className='product'>
        <img className="productImage" src={'/img/' + props.data.image} alt="productImage"></img>
        <h2>{props.data.title}</h2>
        <div className="prices">
            <label className="price">Price: ${props.data.price}</label>
            <label className="total">Total: {getTotal()}</label>
        </div>
        <div className="controls">
            <QuantityPicker onChange={onQuantityChange} />
            <button className="btnAdd btn btn-primary btn-sm">Add</button>
        </div>
    </div>);
};

export default Product;