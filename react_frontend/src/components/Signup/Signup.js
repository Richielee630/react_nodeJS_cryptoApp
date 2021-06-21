import React from 'react'
import './Signup.css'
import { Button, message } from 'antd';
import '../config/config'
class Signup extends React.Component {
    constructor(props){
        super(props)
        this.handleRegister = this.handleRegister.bind(this)
    }

    handleRegister(){
        let username = document.getElementById("username").value
        let password = document.getElementById("password").value
        let email = document.getElementById("email").value
        if(username !== "" && password !== "" && email !== ""){
            if(username.length >= 9 && password.length >= 9){
                let myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if(myreg.test(email)){
                    let url = `${window.host}/register?username=${username}&password=${password}&email=${email}`
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
                        }
                    })
                }else{
                    message.warn("Please enter a valid E-mail address!")
                }
            }else{
                message.warn("The length of username and password should be at least 9!")    
            }
        }else{
            message.warn("Registration information cannot be empty!")
        }
    }

    render() {
        return (
            <div className="signup-box">
                <div className="signup-title">User Sign up</div>
                <div>
                    <input id="username" className="signup-user" type="text" placeholder={'User Name'} required/>
                </div>
                <div>
                    <input id="password" className="signup-password" type="password" placeholder={'Password'} required />
                </div>
                <div>
                    <input id="email" className="signup-email" type="email" placeholder={'E-mail'} required />
                </div>
                <div className="signup-btn-box">
                    <Button onClick={this.handleRegister} type="primary" style={{width:150}}>Register</Button>
                </div>
                <div style={{textAlign:"right",marginTop:5}}><a href="/login">Log in</a></div>
            </div>
        )
    }
}

export default Signup