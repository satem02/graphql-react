import React from "react";
import config from "../config";
import Button from "@mui/material/Button";


function UserLogin() {

  async function loginUser() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "username": config.USER_NAME,
      "password": config.PASSWORD
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch(config.LOGIN_ENDPOINT, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result); localStorage.setItem("token" , result);})
      .catch(error => console.log('error', error))
   }

  
  return (
<Button
  onClick={() => {
    loginUser()
  }}
>
  Set Token
</Button>
  );
}

export default UserLogin;