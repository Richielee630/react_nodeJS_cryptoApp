import React from 'react'

class BtcDay extends React.Component{
    render(){
        return (
            <div>
                <coingecko-coin-price-chart-widget  coin-id="bitcoin" currency="usd" height="400" locale="en" width="800"></coingecko-coin-price-chart-widget>
            </div>
        )
    }
}

export default BtcDay