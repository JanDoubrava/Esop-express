const express = require('express')
const mysql = require("mysql")
const port = 81
const app = express()
let connectionString = 'mysql://root@localhost/projectwp'
app.set('view engine', 'ejs')
app.set('views', __dirname + '/template')

app.use(express.static('root'))

app.listen(port, () => {
    console.log("Server poslouchá na portu: " + port)
})
app.get("/", (req, res) => {

    const dotaz = "SELECT * from products"
    const pripojeni = mysql.createConnection(connectionString)

    pripojeni.query(dotaz, (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        console.log(data);
   
    res.render('index', {
        titulek: "Je libo vitamínek ?",
        produkty: data

    })
})
})

function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "1" && pass == "1") {
        alert("Přihlášení proběhlo úspěšně");
        window.location = "admin.html";
        return false;
    } else {
        alert("Špatné uživatelské jméno nebo heslo");
        return false;
    }
}





// npm i nodemon
// npm i express