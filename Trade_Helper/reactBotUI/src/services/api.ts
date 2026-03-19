import axios from "axios";

const API = axios.create({
    baseURL: "/api"
});

export const runTrading = (symbols: string[]) =>
  API.post("/trading/run", symbols);

export const getPortfolio = () =>
  API.get("/portfolio");