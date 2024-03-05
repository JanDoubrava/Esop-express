

function pridejDoKosiku(button) {
    var produkt = button.parentElement;
    var id = button.getAttribute('data-id');
    var obrazek = produkt.querySelector('.obrazek-produkt').src;
    var nazev = produkt.querySelector('.nazev-produkt').textContent;
    var cena = produkt.querySelector('.cena-produkt').textContent;

    var produktData  = {
        Obrazek: obrazek,
        Nazev: nazev,
        Cena: cena
    };
   
    var kosik = JSON.parse(localStorage.getItem('kosik')) || [];
    kosik.push(produktData);
    localStorage.setItem('kosik', JSON.stringify(kosik));

    alert('Produkt byl přidán do košíku');
   // alert(kosik);
}


function vypisKosik(){
    var produkty = JSON.parse(localStorage.getItem('kosik')) || [];
    var kosikDiv = document.querySelector('.produkty-kosik');
    kosikDiv.innerHTML = '';
    produkty.forEach(function(produkt) {
        var produktDiv = document.createElement('div');
        produktDiv.innerHTML = `
            <img src="${produkt.Obrazek}" alt="${produkt.Nazev}">
            <h2>${produkt.Nazev}</h2>
            <p>${produkt.Cena}</p>
        `;
        kosikDiv.append(produktDiv);
    });
    
}
let cenaText = document.querySelector(".cenaText");
function celkovaCenaKosiku(){
    let cena = 0;
    let kosik = JSON.parse(localStorage.getItem('kosik'));
    for (let i = 0; i < kosik.length; i++) {
        cena = cena + kosik[i].cena ;
        cenaText.innerHTML =  `  <p>${cena}</p>`;

       
        
    }
}

function vytvoritObjednavku() {
    document.getElementById('objednavkaForm').style.display = 'block';
}

function odeslatObjednavku(event) {
    event.preventDefault();
    let jmeno = document.getElementById('jmeno').value;
    let email = document.getElementById('email').value;
    let objednavka = {
        jmeno: jmeno,
        email: email,
        produkty: localStorage.getItem('kosik')
    };
    fetch('/objednavky', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(objednavka),
    })
    .then(response => response.text())
    .then(data => {
        
        localStorage.clear(), // vymazání produktů z localStorage
        alert('Objednávka byla úspěšně odeslána:', data)
    })
    .catch((error) => {
        console.error('Chyba:', error);
    });
}