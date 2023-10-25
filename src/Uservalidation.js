import "./Uservalidation.css";
import { Link} from 'react-router-dom';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState, useEffect } from "react";


const Uservalidation = () => {

  const [user_email, setuser_email] = useState('');
  const [user_pwd, setuser_pwd] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setdata] = useState('');

  useEffect(() => {
    // Use an effect to perform the authentication API call.
    const authenticateUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ user_email, user_pwd }),
        });
        // console.log(user_email);
        // console.log(user_pwd);

        setdata(await response.json());
        // console.log(response.body);
      }
      catch (error) {
        console.error('Email Id does not exist ', error);
      }
      // Assuming the API returns a boolean indicating successful authentication.

    };


    // Call the authentication function only if both username and password are provided.
    if (user_email && user_pwd) {
      authenticateUser();
    }
  }, [user_email, user_pwd]);

  const handleUsername = (event) => {
    setuser_email(event.target.value);
  };

  const handlePassword = (event) => {
    setuser_pwd(event.target.value);
  };
  const eventhandler = () => {
    if (data) {
      setIsLoggedIn(true);
      console.log('Logged in successfully');
    } else {

      console.log('incorrect password.');
    }
  }
  console.log(data)
  return (
    <div className="main">
      <h1>Login Page</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <form>
          <label>
            Username:
            <input type="text" value={user_email} onChange={handleUsername} />
          </label>
          <br />
          <label>
            Password:
            <input type="text" value={user_pwd} onChange={handlePassword} />
          </label>
          <br />
          <button onClick={eventhandler}><Link to="/Home"> Login </Link></button>
        </form>
      )}
    </div>
  );
};




export default Uservalidation;

