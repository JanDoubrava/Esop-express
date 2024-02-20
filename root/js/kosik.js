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
        kosikDiv.appendChild(produktDiv);
    });
}