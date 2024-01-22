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
     // Předpokládáme, že máte nainstalovaný a naimportovaný balíček 'node-localstorage'
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

// Načtěte data z Local Storage
var data = JSON.parse(localStorage.getItem('produkty'));

// Renderujte stránku s daty z Local Storage
res.render('kosik', {
    titulek: "Ber, nebo neber, nebo jdu pryč",
    produkty: data
});
    })
})

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

/*
$(document).ready(function() {
    $(".nakup").click(function() {
        // Získejte ID produktu
        var id = $(this).data("id");

        // Získejte aktuální data z Local Storage
        var data = JSON.parse(localStorage.getItem('produkty')) || [];

        // Přidejte nový produkt do dat
        data.push(id);

        // Uložte data zpět do Local Storage
        localStorage.setItem('produkty', JSON.stringify(data)); 
    });
});
*/