import axios from "axios"

const API = axios.create({ baseURL: "http://localhost:1300" }); // server url

API.interceptors.request.use((req) => {
    // will run for each request to send token to server (to know if user is logged in or not)
    if (localStorage.getItem("profile")) {
      req.headers.Authorization = `Bearer ${
        JSON.parse(localStorage.getItem("profile")).response.token
      }`;
      console.log(JSON.parse(localStorage.getItem("profile")).response.token)
    }
    return req;
  });

export const fetchAdminItems = () => API.get("/admin"); // http://localhost:1300 + /admin concatinated
export const createAdminItems = (newAdminItem) => API.post("/admin", newAdminItem);

export const fetchOwnerItems = () => API.get("/owner");
export const createOwnerItems = (newOwnerItem) => API.post("/owner", newOwnerItem);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);


export const fetchCartItem =()=>API.get("/cart");
export const addCartItem =(newCartItem)=>API.post("/cart",newCartItem)
export const deleteCartItem =()=>API.delete("/cart");