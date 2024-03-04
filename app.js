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
// hlavni stranka ejs
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
//kosik ejs
app.get('/kosik', (req, res) => {
    
    res.render('kosik', {
        titulek: "Ber nebo neber nebo jdu pryč!",
    
    });
});
//prihlaseni ejs
app.get('/prihlaseni', (req, res) => {
    
    res.render('prihlaseni', {
        titulek: "Uspěšně přihlášeno!",
    
    });
});
// registrace ejs
app.get('/registrace', (req, res) => {
    
    res.render('registrace', {
    
        titulek: "Registrujte se!",
    });
});

// obednavka ejs
app.get('/objednavka', (req, res) => {
    
    res.render('objednavka', {
    
        titulek: "Všechny objednavky",
    });
});

// prihlaseni uzivatele
app.post("/prihlasit", (req, res) => {
    let user = req.body.user;
    let pass = req.body.pass;
    const MYSQLdotaz = "SELECT id,user,password FROM users WHERE user = ?"
    const pripojeni = mysql.createConnection(connectionString)
    pripojeni.query(MYSQLdotaz, [user], async (err, data) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            if (data.length > 0) {

                if (await bcrypt.compare(pass, data[0].password)) {
                    if (user === "JendaAdmin") {
                        req.session.user = user;
                        res.redirect("/objednavka");

                    } else {
                        req.session.user = user;
                        res.redirect("/");
                    }
                }

            }

        }
    })
})
// registrace uzivatele
app.post("/registrace", async (req, res) => {
    let jmeno = req.body.user;
    let heslo = req.body.password;
    const cryptHeslo = await bcrypt.hash(heslo, 8);
    let values = [[jmeno, cryptHeslo]];
    const dotaz = "INSERT INTO users (user, password) VALUES ?";
    const pripojeni = mysql.createConnection(connectionString)
    pripojeni.query(dotaz, [values], (err) => {
        if (err) {
            res.status(500).send(err.message)
        }
        else {
            res.send("Registrace úspěšná");
        }

    });

})

