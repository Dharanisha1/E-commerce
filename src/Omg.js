import React from 'react'

import './Omg.css'

 function Omg() {
  return (
    <div>
       <h1>OMG</h1>
       <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" />
        <br/>
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
        

       </form>
    </div>
  )
}

export default Omg; 