import React from 'react';
import { Tabs, Row, Col } from 'antd';
import Cointable from '../cointable/Cointable'
import { Button } from 'antd'
const arr1 = ["https://ftx.us/en/trade/BTC/USD", "https://ftx.com/en/trade/BTC/USD","https://hitbtc.com/zh/btc-to-usdt", "https://markets.bitcoin.com/crypto/BTC", "https://www.bitfront.me/exchange/?coin=BTC&market=USD", "https://tokenize.exchange/market/USD-BTC", "https://trading.bitfinex.com/t?type=exchange", "https://www.bitstamp.net/markets/btc/usd/", "https://pro.coinbase.com/trade/BTC-USD", "https://www.gemini.com/prices/bitcoin"]
const arr2 = ["https://ftx.us/en/trade/ETH/USD", "https://ftx.us/en/trade/ETH/USD", "https://hitbtc.com/zh/eth-to-usdt", "https://markets.bitcoin.com/crypto/ETH", "https://www.bitfront.me/exchange/?coin=ETH&market=USD", "https://tokenize.exchange/market/USD-ETH", "https://trading.bitfinex.com/t/ETH:USD?type=exchange", "https://www.bitstamp.net/markets/eth/usd/", "https://pro.coinbase.com/trade/ETH-USD", "https://www.gemini.com/prices/ether"]
const arr3 = ["https://ftx.us/en/trade/LTC/USD", "https://ftx.com/en/trade/LTC/USD", "https://hitbtc.com/zh/ltc-to-usdt", "https://markets.bitcoin.com/crypto/LTC", "https://www.bitfront.me/exchange/?coin=LTC&market=USD", "https://tokenize.exchange/market/USD-LTC", "https://trading.bitfinex.com/t/LTC:USD?type=exchange", "https://www.bitstamp.net/markets/ltc/usd/", "https://pro.coinbase.com/trade/LTC-USD", "https://www.gemini.com/prices/litecoin"]
class HomeIndex extends React.Component {
  constructor(props){
    super(props)
    this.handleSee = this.handleSee.bind(this);
    this.state = {
      sp:0
    }
  }
  handleSee(){
    let index = document.getElementById("index-box")
    let btn = document.getElementById("btn")
    this.setState({
      sp:!this.state.sp
    })
    if(this.state.sp){
      index.style.height = "100%" 
      btn.innerHTML = "Hidden"
    }else{
      index.style.height = "740px"   //表单折叠
      btn.innerHTML = "Click me to show all"
    }
  }
  render() {
    const { TabPane } = Tabs;
    return (
      <div style={{ marginLeft: 100 }}>
        <Row id="index-box" type='flex' justify='center' style={{ marginTop: 25, marginRight: 194, height: 740, overflow: "hidden", boxSizing: "border-box" }}>
          <Col span={24} >
            <Tabs type="card">
              <TabPane tab="Bitcoin" key="1">
                <Cointable arr={arr1} type="BTC" />
              </TabPane>
              <TabPane tab="Ethereum" key="2">
                <Cointable arr={arr2} type="ETH" />
              </TabPane>
              <TabPane tab="Litecoin" key="3">
                <Cointable arr={arr3} type="LTC" />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <div style={{ marginTop:10, padding: 10, marginLeft:4}}>
          <Button id="btn" type="primary" danger onClick={this.handleSee}>Click me to show all</Button>
        </div>
      </div>
    )
  }
}

export default HomeIndex


