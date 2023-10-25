import React, { useEffect, useState } from "react";
import './Suggestion.css'
import { Link} from 'react-router-dom';



function Suggestions() {
  const [Cartpage, setCartpage] = useState([])


  console.log(Cartpage);
  function getTableData() {
    console.log(Cartpage);
    fetch("http://localhost:8080/getAllcart")
      .then((res) => res.json())
      .then((result) => setCartpage(result))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    getTableData();
  }, []);

  

  const handleDelete = (cart_id) => {
    console.log(cart_id)
    fetch(`http://localhost:8080/deleteUser/${cart_id}`,
      { method: 'delete', })
      .then(() => {

        getTableData();
      })
      .catch((error) => {
        console.error('Error deleting item:', error);
      });
  };

  const onIncrement = (cart_id) => {
    fetch(`http://localhost:8080/incrementQuantity/${cart_id}`,
      { method: 'post' })
      .then(() => getTableData())
      .catch((err) => console.log(err))
  }
  const onDecrement = (cart_id) => {
    fetch(`http://localhost:8080/decrementQuantity/${cart_id}`,
      { method: 'post' })
      .then(() => getTableData())
      .catch((err) => console.log(err))
  }

  return (
    <div className="cart-list">
      <h2>Your cart</h2>
      <ul >
        <li className="bar1">
          <span>Item</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>SubTotal</span>
          <span>Remove</span>
        </li>

      </ul>
      {Cartpage.map((Cartpage) => (
        <div key={Cartpage.cart_id}>
          <ul>
            <li className="cartitem">
              <span><img alt="imagea" style={{ width: "90px", height: "90px" }} src={`data:image/jpeg;base64,${Cartpage.customization.product.prod_img}`} /></span>
              <span className="price">Rs:{Cartpage.bill_amt}</span>
              <div className="qty">
                <button onClick={() => onDecrement(Cartpage.cart_id)}>-</button>
                <span >{Cartpage.qty}</span>
                <button onClick={() => onIncrement(Cartpage.cart_id)} >+</button>
              </div>
              <span>{Cartpage.bill_amt * Cartpage.qty}</span>
              <span><button className="remove" onClick={() => handleDelete(Cartpage.cart_id)}>Remove</button></span>
            </li>
          </ul>



        </div>


      ))}


      <span><h3 className="total">Total:{Cartpage.map(Cartpage => Cartpage.bill_amt * Cartpage.qty).reduce((total, value) => total + value, 0)}
        <button id="order"><Link to="/Order"> Place Onorder </Link></button>
      </h3>
      </span>





    </div>


  );

}




export default Suggestions;

