import {coingeckoAPI} from "./axios";

const congeckoGetCoinId = (id) => {
    return coingeckoAPI.get(`/coins/${id}?sparkline=true`);
};

export default congeckoGetCoinId