import { message, Tabs } from 'antd';
import React from 'react';
import './personal.css';
import BtcDay from '../btcday/btcday';
import EthDay from '../ethday/ethday';
import LtcDay from '../ltcday/ltcday';
import Heatmap from '../heatmap/heatmap';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { HeartTwoTone } from '@ant-design/icons'
import MyComment from '../mycomment/mycomment'
import '../../components/config/config'
const { TabPane } = Tabs;
class Personal extends React.Component {
    // state = {
    //     tabPosition: 'left',
    // };

    
    constructor(props){
        super(props)
        let username = localStorage.getItem("username")
        this.state = {
            username:username,
            tabPosition: 'left',
            arr:[],
            speed:0
        }
        if(!username){
            window.location.href = "/login"
        }
        this.changeTabPosition = this.changeTabPosition.bind(this)    
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSum = this.handleSum.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    componentDidMount(){
        let url = `${window.host}/getlike?username=${this.state.username}`
        fetch(url,{
            method:"POST",
            headers:window.headers
        }).then(res=>{
            return res.json()
        }).then(json=>{
            let a = []
            // a.push(json.data[0].id)
            // a.push(json.data[0].username)
            // a.push(json.data[0].btc)
            // a.push(json.data[0].eth)
            // a.push(json.data[0].ltc)
            console.log(json.data)
            if(json.data[0]){
                if(json.data[0].btc === "1"){
                    a.push("BTC")
                }
                if(json.data[0].eth === "1"){
                    a.push("ETH")
                }
                if(json.data[0].ltc === "1"){
                    a.push("LTC")
                }
                this.setState({
                    arr:a
                })
                if(this.state.arr.length === 0){
                    document.getElementById("mylike").style.display = "none"
                }
            }else{
                message.warn("Please Priority collection!")
                window.location.href = "/"
            }
        })
       
    }

    changeTabPosition (e) {
        this.setState({ tabPosition: e.target.value });
    };


    handleSum(){
        if(this.state.speed > 0){
            this.setState({
                speed: --this.state.speed
            })
        }
    }

    handleAdd(){
        if(this.state.speed < this.state.arr.length-1){
            this.setState({
                speed: ++this.state.speed
            })
        }
    }

    handleDelete(){
        let s = this.state.arr[this.state.speed]
        let url = `${window.host}/remove?s=${s}&username=${this.state.username}`
        fetch(url,{
            method:"POST",
            headers:window.headers
        }).then(res=>{
            return res.json()
        }).then(json=>{
            message.success(json.message)
            window.location.reload()
        })
    }

    render() {
        const { tabPosition } = this.state;
        let mydiv = null
        if(this.state.arr[this.state.speed] === "BTC"){
            mydiv = <BtcDay />
        }else if(this.state.arr[this.state.speed] === "ETH"){
            mydiv = <EthDay />
        }else if(this.state.arr[this.state.speed] === "LTC"){
            mydiv = <LtcDay />
        }else{
            mydiv = "nothing"
        }
        return (
            <div className="personal-box">
                <h1 className="personal-title" id="title">Hello {this.state.username}!</h1>
                <Tabs tabPosition={tabPosition}>
                    <TabPane tab="Favourite cryptos" key="1">
                        <div className="personal-select-btn" id="mylike">
                            <LeftOutlined className="personal-left-btn" onClick={this.handleSum}/>
                            <div className="personal-tip">{this.state.arr[this.state.speed]}</div>
                            <RightOutlined className="personal-right-btn" onClick={this.handleAdd}/>
                            <div className="addLike" style={{marginBottom:0, }} onClick={this.handleDelete}><HeartTwoTone twoToneColor="#eb2f96" /> remove favorite</div>
                        </div>
                        {mydiv}
                    </TabPane>
                    <TabPane tab="History comments" key="2">
                        <MyComment />
                    </TabPane>
                    <TabPane tab="Coin Heatmap" key="3">
                        <Heatmap />
                    </TabPane>
                </Tabs>
            </div>
        );
    }
}

export default Personal