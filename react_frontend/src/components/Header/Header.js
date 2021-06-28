import React from 'react';
import './Header.css'
// import { Row, Col } from 'antd';
// import TitleLogo from '../../image/cryptosolution_logo_logo.jpg'
import { HomeFilled, UserOutlined } from '@ant-design/icons'

class Login extends React.Component {
    render() {
        return (
            <div className="header-login">
                <div> <a href="/login">Log in</a></div>
                <div><a href="/signup">Sign up</a></div>
            </div>
        )
    }
}

class Logout extends React.Component {
    constructor(props) {
        super(props)
        this.handleLogOut = this.handleLogOut.bind(this)
    }
    handleLogOut() {
        localStorage.setItem("username", "")
        document.cookie = "username=;expires=" + -1
        window.location.href = "/"
    }
    render() {
        return (
            <div className="header-login">
                <a onClick={this.handleLogOut} href="/">Log Out</a>
            </div>
        )
    }
}

// function LoginStyle(){
//     let username = localStorage.getItem("username")
//     alert(this.props.username)
//     if(!username){
//         return <Login />;
//     }
//     return <Logout />;
// }


function Header(props) {
    let LoginStyle = null
    if (props.user) {
        LoginStyle = <Logout />
    } else {
        LoginStyle = <Login />
    }
    return (
        <header className={'container header-flex header-bg'}>
            <div className="logo-box">
                <div className="logo"></div>
                <div className="header-title">Crypto$olution</div>
                <div className="header-menu">
                    <div> <a href="/intro">Intro</a></div>
                    <div><HomeFilled /> <a href="/">Home</a></div>
                    <div><UserOutlined /> <a href="/personal">Personal</a></div>
                </div>
                {LoginStyle}
            </div>
        </header>
    );
};
export default Header;
