import React from "react";

class BTC extends React.Component {
    componentDidMount() {
        var script = document.createElement("script")
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
        script.innerHTML = `{
			"interval": "1m",
			"width": 325,
			"isTransparent": true,
			"height": 450,
			"symbol": "CME:BTCQ2021",
			"showIntervalTabs": true,
			"locale": "en",
			"colorTheme": "light"
		}`
        document.getElementById("box").appendChild(script);
        
    }
    render() {
        return (
            <div>
                <div className="tradingview-widget-container" id="box">
                    <div className="tradingview-widget-container__widget"></div>
                    <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/CME-BTCQ2021/technicals/"
                        rel="noopener" target="_blank"><span className="blue-text">Technical Analysis for BTCQ2021</span></a> by
  TradingView</div>

                </div>

            </div>
        );
    }
}


export default BTC