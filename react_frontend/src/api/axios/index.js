import axios from 'axios'

export const URL = "https://api.coingecko.com/api/v3";

export const coingeckoAPI = axios.create({baseURL : URL});
