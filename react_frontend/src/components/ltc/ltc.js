import React from "react";

class LTC extends React.Component {
    componentDidMount() {
        var script = document.createElement("script")
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js"
        script.innerHTML = ` {
            "interval": "1m",
            "width": "325",
            "isTransparent": true,
            "height": "450",
            "symbol": "KRAKEN:LTCUSD",
            "showIntervalTabs": true,
            "locale": "en",
            "colorTheme": "light"
          }`
        document.getElementById("ltc-box").appendChild(script);
    }
    render() {
        return (
            <div>
                <div className="tradingview-widget-container" id="ltc-box">
                    <div className="tradingview-widget-container__widget"></div>
                    <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/LTCUSD/technicals/"
                        rel="noopener" target="_blank"><span className="blue-text">Technical Analysis for LTCUSD</span></a> by
		TradingView</div>

                </div>

            </div>
        );
    }
}


export default LTC