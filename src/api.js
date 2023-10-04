import axios from "axios";
const api = axios.create({
    baseURL: "https://6514aa59dc3282a6a3cd6102.mockapi.io/musicas"
});
export default api;