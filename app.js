const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const app = express()
const port = 3000
app.use(express.static('css'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const mysql = require('mysql');

var con = mysql.createConnection({
  host     : 'localhost',
  //host     : '153.127.20.106',
  port	   : '3306',
  user     : 'root',
  password : '',
  //password : 'root',
  database: 'calender',
  timezone: 'jst'
});

app.get('/', (req, res) => {
	const sql = "select * from schedule";
	con.query(sql, function (err, result, fields) {  
	if (err) throw err;
	res.render('index',{content : result});
	});
});

app.post('/', (req, res) => {
	const sql = "INSERT INTO schedule SET ?"
	con.query(sql,req.body,function(err, result, fields){
		if (err) throw err;
		console.log(result);
		res.redirect('/');
	});
});

app.get('/create/:setday',(req,res)=>{
    res.render('form',{day : req.params.setday});
});


app.get('/edit/:id',(req,res)=>{
    const sql = "SELECT * FROM schedule WHERE id = ?";
    con.query(sql,[req.params.id],function (err, result, fields) {  
        if (err) throw err;
        res.render('edit',{schedule : result});
    });
});

app.post('/update/:id',(req,res)=>{
	const sql = "UPDATE schedule SET ? WHERE id = " + req.params.id;
	con.query(sql,req.body,function (err, result, fields) {  
		if (err) throw err;
		console.log(result);
		res.redirect('/');
	});
});

app.get('/delete/:id',(req,res)=>{
	const sql = "DELETE FROM schedule WHERE id = ?";
	con.query(sql,[req.params.id],function(err,result,fields){
		if (err) throw err;
		console.log(result);
		res.redirect('/');
	})
});

app.get('/', function(req, res, next) {
	const query = 'SELECT * FROM schedule';
	con.query(query, function(err, rows) {
	  console.log(rows);
	  res.render('form',{day : req.params.setday});
	});
  });

app.listen(3000);