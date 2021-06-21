import React from 'react'
import './mycomment.css'
import '../../components/config/config'
class MyComment extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comment: []
        }
    }

    componentDidMount() {
        let username = localStorage.getItem("username")
        let url = `${window.host}/getmycomment?username=${username}`
        console.log(url)
        fetch(url, {
            method: "POST",
            headers: window.headers
        }).then(res => {
            return res.json()
        }).then(json => {
            let arr = []
            for (let i in json.data) {
                let a = []
                a.push(json.data[i].id)
                a.push(json.data[i].username)
                a.push(json.data[i].comment)
                a.push(json.data[i].mtime)
                arr.push(a)
            }
            this.setState({
                comment: arr
            })
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.comment.map((el, index) => {
                        return (
                            <div className="mycomment-box">
                                <div>
                                    <div className="n-mycomment-title">{el[3]}</div>
                                    <div>
                                        {el[2]}
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}

export default MyComment