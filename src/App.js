
import './App.css';
import Navbar from './navbar';
import { Routes, Route } from "react-router-dom";


import Home from "./Home";
import Aboutus from "./About us";
import Helps from "./Helps";
import Suggestions from './Suggestions';
import Uservalidation from './Uservalidation';
import Order from './Order';
import Payment from './Payment';
import Product1 from './Product1';
 import Dialog from './Dialog';


function App() {
  return (
     <div className="App">
      
      
     <Navbar />
      <Routes>
        <Route exact path='/' element={<Uservalidation />}/> 
        <Route exact path="/Home" element={<Home />} />
        <Route exact path ='suggestions' element={<Suggestions />} />
        <Route exact path="About us" element={<Aboutus />} />
        <Route exact path="Helps" element={<Helps />} />
        <Route exact path="Order" element={<Order/>}/>
        <Route exact path="Payment" element={<Payment/>}/>
        <Route exact path="Product1" element={<Product1/>}/>
         <Route exact path="dialog" element={<Dialog/>}/> 
        
      </Routes>
     </div>
  );
}

export default App;

