import {coingeckoAPI} from "./axios";

const congeckoGetExchangeInfo = (exchange) => {
    return coingeckoAPI.get(`/exchanges/${exchange}/tickers`);
};

export default congeckoGetExchangeInfo
