/*
- vypsat produkty z local storage do kosiku #
- zajistit funkčnost filtru ----
- odeslani objednavky z košiku 
- bude potreba vyplnit udaje od toho kdo objednava
- po prihlaseni na strance Prihlaseni zustane otevrena admin cast pres session
- v admin casti bude potvrzovani a odmitani objednavek
- moznost odebirani a pridavani produktu v admin casti


*/ 

const express = require('express')
const session = require("express-session")
const bcrypt = require("bcrypt")
const bodyParser = require("body-parser")
const mysql = require("mysql")
const port = 81
const app = express()
let connectionString = 'mysql://root@localhost/projectwp'
app.set('view engine', 'ejs')
app.set('views', __dirname + '/template')

app.use(express.static('root'))
app.use(bodyParser.urlencoded ({extended: false}))
app.use(session({secret: "secret"}))
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

app.get('/kosik', (req, res) => {
    
    res.render('kosik', {
        titulek: "Ber nebo neber nebo jdu pryč!",
    
    });
});
app.get('/prihlaseni', (req, res) => {
    
    res.render('prihlaseni', {
        titulek: "Uspěšně přihlášeno!",
    
    });
});
app.post("/prihlasit", (req, res) => {
    let user = req.body.user;
    let pass = req.body.pass;
    const dotaz = "SELECT id,jmeno,heslo FROM uzivatel WHERE email = ?"
    const pripojeni = mysql.createConnection(connectionString)
    pripojeni.query(dotaz, [email], async (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            if (data.length > 0) {

                if (await bcrypt.compare(heslo, data[0].heslo)) {
                    if (email === "admin@email.cz") {
                        req.session.email = email;
                        res.redirect("/objednavky");

                    } else {
                        req.session.email = email;
                        res.redirect("/");
                    }
                }

            }

        }
    })
})


