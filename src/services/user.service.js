import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://caaqms.urbansciences.in/adp/";

var config = {
  method: 'get',
  url: API_URL + "user",
  headers: authHeader()
};

var home = {
  method: 'get',
  url: API_URL,
  headers: authHeader()
};

// axios(config)
// .then(response => {
//   setUserLocal(response.data.token, response.data.username);
//   console.log("response.data",response.data.status_code,"response", response)
//   setAuthLoading(false);
// }).catch(error => {
//   removeUserLocal();
//   setAuthLoading(false);
// });

const getPublicContent = () => {
  return axios(home);
};

const getUserBoard = () => {
  return axios(config)
};


export default {
  getPublicContent,
  getUserBoard,
};