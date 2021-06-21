const Express = require("express")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const cors = require("cors")
const md5 = require("md5-node")
const app = Express()

const pool = mysql.createPool({
	host:"127.0.0.1",
	database:"btb",
	user:"root",
	password:"root"
})


app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.all('*',function(req,res,next){
	res.setHeader('Content-Type','application/x-www-form-urlencoded')
	res.setHeader('Access-Control-Allow-Methods','*')
	res.setHeader('Access-Control-Allow-Origin','*')
	next()
})

app.post('/login',function(req,res){
	let sql = "select * from user where username=? and password1=?"
	let password1 = md5(req.query.password)
	pool.query(sql,[req.query.username,password1],function(err, result){
		if(err){
			console.log(err)
		}else{
			if(result.length == 0){
				res.json({
					err:1,
					message:"Account or password error!"
				})
			}else{
				res.json({
					err:0,
					message:"Login successful!"
				})
			}
		}
	})
})

app.post("/register",function(req,res){
	let username = req.query.username
	let email = req.query.email
	let password2 = req.query.password
	let password1 = md5(password2)
	
	let sql = "select * from user where username=?"
	pool.query(sql,[username],function(err,result){
		if(result.length == 0){
			let sql1 = "insert into user (username,password1,password2,email) values (?,?,?,?)"
			pool.query(sql1,[username,password1,password2,email],function(err,result){
				if(err){
					res.json({
						err:1,
						message:"Register Fail!"
					})
				}else{
					res.json({
						err:0,
						message:"Register successful!"
					})					
				}
			})
		}else if(result.length != 0){
			res.json({
				err:1,
				message:"User name already exists!"
			})				
		}
	})
})


app.post("/save",function(req,res){
	let savemsg = req.query.savemsg
	let username = req.query.username
	let sql = "select * from mylike where username=?"
	let btc = 0
	let eth = 0
	let ltc = 0
	if(savemsg == "BTC"){
		btc = 1
	}else if(savemsg == "ETH"){
		eth = 1
	}else if(savemsg == "LTC"){
		ltc = 1
	}
	pool.query(sql,[username],function(err,result){
		if(result.length == 0){
			let sql1 = "insert into mylike (username,btc,eth,ltc) values (?,?,?,?)"
			pool.query(sql1,[username,btc,eth,ltc],function(err,result){
				res.json({
					err:0,
					message:"Save Successful!"
				})
			})
		}else{
			let msql = ""
			if(savemsg == "BTC"){
				msql = "update mylike set btc=? where username=?"
			}else if(savemsg == "ETH"){
				msql = "update mylike set eth=? where username=?"
			}else if(savemsg == "LTC"){
				msql = "update mylike set ltc=? where username=?"
			}
			pool.query(msql,[1,username],function(err,result){
				res.json({
					err:0,
					message:"Save Successful!"
				})
			})
		}
	})
})


app.post("/comment",function(req,res){
	let msg = req.query.msg
	let username = req.query.username
	let month = new Date().toDateString().split(" ")[1]
	let day = new Date().getDate()
	let year = new Date().getFullYear()
	let mtime = `${day},${month} ${year}`
	let sql = "insert into comment (username,comment,mtime) values (?,?,?)"
	pool.query(sql,[username,msg,mtime],function(err,result){
		res.json({
			err:0,
			message:"Comment Successful!"
		})
	})
})


app.post("/getcomment",function(req,res){
	let sql = "select * from comment order by id desc"
	pool.query(sql,function(err,result){
		res.json({
			err:0,
			message:"SuccessFul!",
			data:result
		})
	})
})

app.post("/getlike",function(req,res){
	let username = req.query.username
	let sql = "select * from mylike where username=?"
	pool.query(sql,[username],function(err,result){
		res.json({
			err:0,
			message:"Successful",
			data:result
		})
	})
})

app.post("/remove",function(req,res){
	let s = req.query.s
	let username = req.query.username
	let sql = ""
	if(s == "BTC"){
		sql = "update mylike set btc=0 where username=?"
	}else if(s == "ETH"){
		sql = "update mylike set eth=0 where username=?"
	}else if(s == "LTC"){
		sql = "update mylike set ltc=0 where username=?"
	}
	
	pool.query(sql,[username],function(err,result){
		res.json({
			err:0,
			message:"Remove Successful!"
		})
	})
})

app.post("/getmycomment",function(req,res){
	let username = req.query.username
	console.log(username)
	let sql = "select * from comment where username=?"
	pool.query(sql,[username],function(err,result){
		res.json({
			err:0,
			message:"Successful!",
			data:result
		})
	})
})
app.listen(8888)