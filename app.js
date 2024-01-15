const express = require('express')
const mysql = require("mysql")
const port = 81
const app = express()
let connectionString = 'mysql://root@localhost/projektWP'
app.set('view engine', 'ejs')
app.set('views', __dirname + '/template')

app.use(express.static('root'))
app.listen(port, () => {
    console.log("Server poslouchá na portu: " + port)
})
app.get("/", (req, res) => {

    const dotaz = "SELECT * from produkty"
    const pripojeni = mysql.createConnection(connectionString)

    pripojeni.query(dotaz, (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        console.log(data);
   
    res.render('index', {
        titulek: "E-shop papání",
        produkty: data

    })
})
})






// npm i nodemon
// npm i express