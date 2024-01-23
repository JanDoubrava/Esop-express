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
app.get("/kosik", (req, res) => {

        res.render('kosik', {
            titulek: "Ber nebo neber nebo jdu pryč!",
             })

    })
    app.get('/cesta', function(req, res) {
        var produkto = [];
        for (var i = 0; i < localStorage.length; i++) {
            var id = localStorage.key(i);
            var produkta = JSON.parse(localStorage.getItem(id));
            produkto.push(produkta);
        }
        res.render('cesta', { produkto: produkto });
    });
function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user == "user" && pass == "12345") {
        alert("Přihlášení proběhlo úspěšně");
        window.location = "admin.html";
        return false;
    } else {
        alert("Špatné uživatelské jméno nebo heslo");
        return false;
    }
}
