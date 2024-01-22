// Předpokládáme, že máte nainstalovaný a naimportovaný balíček 'node-localstorage'
var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');

// Vyřešení konfliktů
var $j = jQuery.noConflict();

$j(function() {
    $j(".nakup").on("click", function() {
        // Získejte ID produktu
        var id = $j(this).data("id");

        // Získejte aktuální data z Local Storage
        var data = JSON.parse(localStorage.getItem('produkty')) || [];

        // Přidejte nový produkt do dat
        data.push(id);

        // Uložte data zpět do Local Storage
        localStorage.setItem('produkty', JSON.stringify(data)); 
    });
});

// Načtěte data z Local Storage
var data = JSON.parse(localStorage.getItem('produkty'));

// Renderujte stránku s daty z Local Storage
res.render('kosik', {
    titulek: "Ber, nebo neber, nebo jdu pryč",
    produkty: data
});
