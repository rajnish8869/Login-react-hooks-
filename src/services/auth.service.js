import axios from "axios";
import FormData from 'form-data';

const API_URL = "http://caaqms.urbansciences.in/adp/";

var data = new FormData();

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};


function login(username, password) {
    data.append('username', username);
    data.append('password', password);
    var requestOptions = {
        method: 'POST',
        body: data,
        redirect: 'follow'
      };
  return fetch(API_URL+ "login", requestOptions)
    .then(response => response.json())
    .then((response) => {
      if (response.token) {
        localStorage.setItem("user",response.token);
        localStorage.setItem("status_code",response.status_code);
      }
      // console.log("response",response)
      return response;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("status_code");
};

const getCurrentUser = () => {
  return localStorage.getItem("user");
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};