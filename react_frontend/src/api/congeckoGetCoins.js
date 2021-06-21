import {MONEY, SORT} from "./axios/apiConstants";
import {coingeckoAPI} from "./axios";

const congeckoGetCoins = coingeckoAPI.get(`/coins/markets?vs_currency=${MONEY}&order=${SORT}&per_page=30&page=1&sparkline=true&price_change_percentage=1h`);

export default congeckoGetCoins
