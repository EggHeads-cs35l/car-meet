import axios from "axios";
import { useState } from "react";

const Login = (props, setData) =>{
    const loginCredetentials = {
          email: props.email, 
          password: props.password
    }
   axios.post("http://169.232.189.191:4000/app/login", loginCredetentials)
   .then((response) => {
      if (response.data != null){
         const userData = {
            username: response.data.username,
            email: response.data.email,
            name: name,
            location: location,
            img1: img,
            year: year,
            mode: mode,
            model: model,
            make: make,
         };
         setData(userData)
      }
    });
}

export default Login;