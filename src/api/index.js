import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:1300" }); // server url

export const fetchItems = () => API.get("/user"); // http://localhost:1300 + /user concatinated

export const createItem = (newItem) => API.post("/user", newItem);
