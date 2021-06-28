import React, {Component} from 'react';
import './Cointtable.css'
import Coinmy from "../coinmy/Coinmy";
import BTC from '../../components/btc/btc'
import ETH from '../../components/eth/eth'
import LTC from '../../components/ltc/ltc'
import { HeartTwoTone } from '@ant-design/icons'
import Comment from '../../components/comment/comment'
import '../../components/config/config'
import {message} from 'antd'
// edited by xiaohei
class Cointable extends Component {
    state = {
        bnbexchange_ist: ['ftx_spot','bitcoin_com'],
        exchange_ist: ['ftx_us','ftx_spot','hitbtc','bitcoin_com','bitbox','tokenize','bitfinex','bitstamp','gdax','gemini'],
        exchange_ist_name: ['FTX.US','Bitfinex','Bitstamp','Gdax,','Gemini'],
        isLoading: true
    };
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
    }
    componentDidMount() {}

    handleSave(){
        let saveMsg = null
        if(this.props.type === "BTC"){
            saveMsg = "BTC"
        }else if(this.props.type === "ETH"){
            saveMsg = "ETH"
        }else if(this.props.type === "LTC"){
            saveMsg = "LTC"
        }
        let username = localStorage.getItem("username")
        if(username){
            let url = `${window.host}/save?savemsg=${saveMsg}&username=${username}`
            fetch(url,{
                method:"POST",
                headers:window.headers
            }).then(res=>{
                return res.json()
            }).then(json=>{
                message.success(json.message)
            })
        }else{
            message.warn("Please Log In!")
        }
    }
    render() {
        const {exchange_ist,bnbexchange_ist} = this.state;
        console.log(exchange_ist)
    
        
        const { type, arr } = this.props
        let pack = null
        if(this.props.type === "BTC"){
            pack = <BTC />
        }else if(this.props.type === "ETH"){
            pack = <ETH />
        }else if(this.props.type === "LTC"){
            pack = <LTC />
        }
        return (
            <div className={'container'}>
                <div className="current-coin-info-wrap">
                    <div className="current-coin-info my-box">
                        <table className="table-my-class">
                            <tbody>
                            <tr>
                                <th>company</th>
                                <th>price</th>
                                <th>volume</th>
                                <th>vol%</th>
                                <th>price trend</th>
                            </tr>
                            {
                                type === 'BNB'? bnbexchange_ist.map((coin, numCoin) => {
                                    return (
                                        <Coinmy exchanges_name={coin} key={numCoin} type={type}></Coinmy>
                                    )
                                }):
                                
                                exchange_ist.map((coin, numCoin) => {
                                
                                    return (
                                        <Coinmy exchanges_name={coin} key={numCoin} aHreF={arr[numCoin]} type={type}></Coinmy>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                        <div>
                            <div className="addLike" onClick={this.handleSave}><HeartTwoTone twoToneColor="#eb2f96" /> add to favorite crypto</div>
                            <div className="btc">
                                <div className="btc-title">Trading Suggest</div>
                                <div className="btc-content">
                                    {pack}
                                </div>
                            </div>
                        </div>
                        <div style={{height:700}}>
                            <Comment />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cointable;
