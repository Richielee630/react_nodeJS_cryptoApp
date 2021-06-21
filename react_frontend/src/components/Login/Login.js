import React from 'react'
import './Login.css'
import { Button, message } from 'antd';
import { Checkbox } from 'antd';
import '../config/config'
class Login extends React.Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.state = {
            falg:false
        }
    }
    handleChange(e){
        this.setState({
            falg:e.target.checked
        })
    }

    handleLogin(){
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        if(username !== "" && password !== ""){
            if(username.length >= 9 && password.length >= 9){
                let url = `${window.host}/login?username=${username}&password=${password}`
                fetch(url,{
                    method:"POST",
                    mode:"cors",
                    headers:window.headers
                }).then(res=>{
                    return res.json()
                }).then(json=>{
                    if(json.err === 1){
                        message.warn(json.message)
                    }else if(json.err === 0){
                        message.success(json.message)
                        if(this.state.falg){
                            document.cookie = `username=${username}`
                            window.location.href = "/"
                        }else{     
                            window.localStorage.setItem("username",username)
                            window.location.href = "/"
                        }
                    }
                })
            }else{
                message.warn("The length of account and password should be at least 9!")    
            }
        }else{
            message.warn("Account or password cannot be empty!")
        }
        
    }
    render() {
        return (
            <div className="login-box">
                <div className="login-title">User Log in</div>
                <div>
                    <input id="username" className="login-user" type="text" placeholder={'User Name'} />
                </div>
                <div>
                    <input id="password" className="login-password" type="password" placeholder={'Password'} />
                </div>
                <div style={{marginTop:15}}>
                    <Checkbox onChange={this.handleChange}>Remember me (until closing the browser)</Checkbox>
                </div>
                <div className="login-btn-box">
                    <Button type="primary" style={{width:150}} onClick={this.handleLogin}>Log in</Button>
                </div>
                <div style={{textAlign:"right",marginTop:8}}><a href="/signup">Register</a></div>
            </div>
        )
    }
}

export default Login