
    function pridejDoKosiku(button) {
        var produkt = button.parentElement;
        var id = button.getAttribute('data-id');
        var obrazek = produkt.querySelector('.obrazek-produkt').src;
        var nazev = produkt.querySelector('.nazev-produkt').textContent;
        var cena = produkt.querySelector('.cena-produkt').textContent;
    
        var produktData = {
            Obrazek: obrazek,
            Nazev: nazev,
            Cena: cena
        };
    
        localStorage.setItem(id, JSON.stringify(produktData));
    
    alert('Produkt byl přidán do košíku');
}               