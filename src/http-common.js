import axios from "axios";

export default axios.create({
  baseURL: "130.61.54.208:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});