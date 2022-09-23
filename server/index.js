const express = require('express');
const bodyParser = require('body-parser');
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root123",
  database: "weasun_users"
});


db.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("La base de donnée est actuellement disponible");
  }
})

app.post('/register', (req, res) => {

  const username = req.body.username
  const password = req.body.password
  const email = req.body.email

  db.query("INSERT INTO users (username, password, email) VALUES (?, ?, ?)",
  [username, password, email],
  (err) => {
    if (err) {
      console.log(err);
    } else {
     console.log("result"); 
    };
  })
})


app.post('/login', (req, res)=>{

  const username = req.body.username
  const password = req.body.password
  db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
  [username, password],
  (err, result) => {
    if (err) {
      res.send({err: err});
    }
    
     if (result.length > 0) {
      res.send({message : "" + username});
     } else {
      res.send({message : "❌ Nom d'utilisateur / Mot de passe ❌"});
     }
    }
    )}
)


/*
.get // récupéer la première ligne
.all // toutes les lines
.each // Récupérer les ligne une par une
*/

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);


