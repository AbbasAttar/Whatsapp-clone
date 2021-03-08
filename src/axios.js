import axios from "axios";

const instance = axios.create({
  baseURL: "https://abbas-whatsapp-mern-backend.herokuapp.com",
});

export default instance;
