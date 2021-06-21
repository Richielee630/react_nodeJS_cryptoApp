import {coingeckoAPI} from "./axios";
import {MONEY, SORT} from "./axios/apiConstants";

const congeckoGetPagination  = (pageNumber) => {
    return coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=${pageNumber}&price_change_percentage=1h`);
};

export default congeckoGetPagination
