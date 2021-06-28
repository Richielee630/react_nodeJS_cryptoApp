import React, {Component} from 'react';
import './Coin.css'
import {congeckoGetExchangeInfo} from  "../../api"
import GraphicInfoMy from "../../components/GraphicInfo/GraphicInfoMy";
import Loading from "../../components/Loading/Loading";

const REQUEST_FAILED = "REQUEST_FAILED";
const SOMETHING_WENT_WRONG = "SOMETHING_WENT_WRONG";

class Coinmy extends Component {

    state = {
        exchanges_name: '',
        name: '',
        base: '',
        target: '',
        price: 0,
        volume: 0,
        volume_percent: 0,
        sparkline_price:new Array(25).fill(0),
        isLoading:true
    };
    task_timer = ()=>{
        const {exchanges_name} = this.state;
        const base = this.props.type;
        const target = "USD";
        congeckoGetExchangeInfo(exchanges_name).then(
                result => {
                    const name = result.data.name;
                    let tickers = result.data.tickers;
                    let index = null;
                    const baseData = {
                        last: 0,
                        volume: 0,
                        bid_ask_spread_percentage: 0,

                    }
                    // alert(JSON.stringify(result))
                    for(let i=0;i<tickers.length;i++){
                        if((tickers[i].base ===base)&&(tickers[i].target ===target)){
                            index = i;
                            break;
                        }
                    }
                    const ticker_item = index === null ?  baseData: tickers[index];
                    const {sparkline_price} = this.state;
                    let sparkline_7d_temp = sparkline_price;
                    sparkline_7d_temp.push(ticker_item.last);
                    sparkline_7d_temp.shift();
                    // alert(JSON.stringify(sparkline_7d_temp))
                    this.setState({
                        base:base,
                        target:target,
                        id: 0,
                        name: name,
                        price: ticker_item.last.toFixed(2),
                        volume: ticker_item.volume.toFixed(2),
                        volume_percent: (ticker_item['bid_ask_spread_percentage']*100).toFixed(2),
                        sparkline_price: sparkline_7d_temp,
                        isLoading: false
                    })
                    this.timer = setTimeout(this.task_timer, 30000);
                },
                error => {
                    this.setState({error: REQUEST_FAILED})
                },
            ).catch(
                critical => {
                    this.setState({error: SOMETHING_WENT_WRONG})
                }
            ).finally(() => {
                this.setState({
                    isLoading: false
                })
            })
    };
    componentDidMount() {
        this.setState({exchanges_name: this.props.exchanges_name})
        this.timer = setTimeout(this.task_timer, 2000);
	//	this.timer = setTimeout(() => { resolve(item[1]()); }, item[0]);
	//	stop() { this.pro = Promise.reject(); clearTimeout(this.timer);
    };
    componentWillUnmount() {
        clearTimeout(this.timer)
    }
    render() {

        const {
            base,target,id, price, name, volume, volume_percent, sparkline_price, isLoading
        } = this.state;
        const {aHreF} = this.props
        if (isLoading){
            return <Loading/>
        }
        return (
                    <tr>
                        <td className="nameStyle" style={{width:100}}>
                            <a href={aHreF}>{name}({base}/{target})</a>
                        </td>
                        <td className="priceStyles">{price}</td>
                        <td className="volumeStyles">{volume}</td>
                        <td className="volumepercentStyles">{volume_percent}%</td>
                        <td className="char-line-parent">
                                <GraphicInfoMy sparkline_price={sparkline_price}/>
                        </td>
                    </tr>
        );
    }
}
export default Coinmy;
