import axios from "axios";

const api = axios.create({
  baseURL: "https://api-desafio-front.justdigital.com.br/"
})

export default api;