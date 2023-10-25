import React, { useEffect, useState } from "react";
import "./Product1.css";

function Product1() {
  const [products,setProducts] = useState([]);

  //     useEffect(() => {
  //     fetch("http://localhost:8080/getAllproduct")
  //     .then((res)=>res.json())
  //     .then((result)=>setProducts(result))
  //     .catch((err) => console.log(err));

  // },[]
  // );

  // const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/getAllproduct")
      .then((res) => res.json())
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.prod_id}>
          <div>
            <div className="product-card">
              <img
                src={`data:image/jpeg;base64,${product.base64Image}`}
                alt={products.prod_name}
                className="product-image"
              />
              <div className="product-details">
                <h2 className="product-name">{product.prod_name}</h2>
                <p className="product-price">Price: Rs.{product.prod_price}</p>
                <p className="product-description">{product.prod_desc}</p>
                <button className="customizable">Customizable</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Product1;
