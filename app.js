/*
- vypsat produkty z local storage do kosiku
- zajistit funkčnost filtru
- odeslani objednavky z košiku 
- bude potreba vyplnit udaje od toho kdo objednava
- po prihlaseni na strance Prihlaseni zustane otevrena admin cast pres session
- v admin casti bude potvrzovani a odmitani objednavek
- moznost odebirani a pridavani produktu v admin casti


*/ 





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

app.get('/kosik', (req, res) => {
    
    res.render('kosik', {
        titulek: "Ber nebo neber nebo jdu pryč!",
    
    });
});

