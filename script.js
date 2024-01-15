// let razeniNazevVzestupne = document.getElementById("razeniNazevVzestupne"); // NazevVzestupne

// let razeniNazevSestupne = document.getElementById("razeniNazevSestupne"); // NazevSestupne

// let razeniCenaVzestupne = document.getElementById("razeniCenaVzestupne"); // CenaVzestupně

// let razeniCenaSestupne = document.getElementById("razeniCenaSestupne"); // CenaSestupně

// let filtrButton = document.getElementById("filtr"); // filtrButton

// let minCena = document.getElementById("minCena"); // minCena input

// let maxCena = document.getElementById("maxCena"); // maxCena input

// let sekceProdukty = document.getElementById("index-produkty"); // sekceProdukty

// let sekceKosik = document.getElementById("kosikProdukty"); // sekceKosik

// let produkty = '[{"Produkt":"Trout Rainbow Whole","Cena":204},{"Produkt":"Chocolate - Compound Coating","Cena":66},{"Produkt":"Wine - Winzer Krems Gruner","Cena":194},{"Produkt":"Wine - Pinot Noir Stoneleigh","Cena":249},{"Produkt":"Wine - Ice Wine","Cena":55},{"Produkt":"Rice - Aborio","Cena":65},{"Produkt":"Pepper - Chilli Seeds Mild","Cena":79},{"Produkt":"Straw - Regular","Cena":104},{"Produkt":"Beer - Moosehead","Cena":53},{"Produkt":"Brandy - Bar","Cena":140},{"Produkt":"Basil - Primerba, Paste","Cena":70},{"Produkt":"Syrup - Monin, Irish Cream","Cena":47},{"Produkt":"Coconut Milk - Unsweetened","Cena":204},{"Produkt":"Wine - White, Antinore Orvieto","Cena":114},{"Produkt":"Pepper - Cayenne","Cena":120},{"Produkt":"Foil Wrap","Cena":132},{"Produkt":"Soho Lychee Liqueur","Cena":90},{"Produkt":"Bread - Sour Batard","Cena":26},{"Produkt":"Lamb - Loin Chops","Cena":114},{"Produkt":"Mustard - Dry, Powder","Cena":96},{"Produkt":"Beer - Sleemans Cream Ale","Cena":97},{"Produkt":"Pate - Liver","Cena":190},{"Produkt":"Cake - Night And Day Choclate","Cena":101},{"Produkt":"Ham - Cooked Bayonne Tinned","Cena":195},{"Produkt":"Numi - Assorted Teas","Cena":241},{"Produkt":"Chutney Sauce - Mango","Cena":225},{"Produkt":"Pears - Bosc","Cena":26},{"Produkt":"Soup - Campbells, Minestrone","Cena":171},{"Produkt":"Bread Crumbs - Japanese Style","Cena":41},{"Produkt":"Muffin - Banana Nut Individual","Cena":118}]';

// let objekty = JSON.parse(produkty); // nacteni dat json do objektu v JS



// cena od do
filtrButton.addEventListener("click", function () {    // pridani event listeneru na tlacitko
    let minimalniCena = minCena.value;
    let maximalniCena = maxCena.value;
    for (let i = 0; i < objekty.length; i++) {
        if (objekty[i].Cena >= minimalniCena && objekty[i].Cena <= maximalniCena) {
            console.log(objekty[i].Produkt);
        }

    }
});

// // // razeni A-Z
// // razeniNazevVzestupne.addEventListener("click", function () {   // pridani event listeneru na tlacitko
// //     objekty.sort(function (a, b) {
// //         let slovo1 = a.Produkt.toLowerCase(); // prevedeni na stejna pismena(buď velka nebo mala)
// //         let slovo2 = b.Produkt.toLowerCase(); // prevedeni na stejna pismena(buď velka nebo mala)
// //         for (let i = 0; i < objekty.length; i++) {
// //             if (slovo1 < slovo2) {
// //                 return -1;  // a bude před b
// //             }
// //             if (slovo1 > slovo2) {
// //                 return 1; // b bude před a
// //             }
// //             return 0;

// //         }

// //     });
// //     produkt.innerHTML = objekty[i].Produkt;
// //     cena.innerHTML = objekty[i].Cena + " Kč";
// // }); // konec razeni A-Z

// // // razeni Z-A
// // razeniNazevSestupne.addEventListener("click", function () {
// //     objekty.sort(function (a, b) {
// //         let slovo1 = a.Produkt.toLowerCase(); // prevedeni na stejna pismena(buď velka nebo mala)
// //         let slovo2 = b.Produkt.toLowerCase(); // prevedeni na stejna pismena(buď velka nebo mala)
// //         for (let i = 0; i < objekty.length; i++) {
// //             if (slovo1 > slovo2) {
// //                 return -1; // b bude před a
// //             }
// //             if (slovo1 < slovo2) {
// //                 return 1;// a bude před b
// //             }
// //             return 0;

// //         }
// //     });
// //     produkt.innerHTML = objekty[i].Produkt;
// //     cena.innerHTML = objekty[i].Cena + " Kč";


// // });// konec razeni Z-A

// // // razeni 0-9
// // razeniCenaVzestupne.addEventListener("click", function () {
// //     for (let i = 0; i < objekty.length; i++) {
// //         objekty.sort(function (a, b) {
// //             return a.Cena - b.Cena;
// //         });
// //         produkt.innerHTML = objekty[i].Produkt;
// //         cena.innerHTML = objekty[i].Cena + " Kč";

// //     }

// // });// konec razeni 0-9

// // // razeni 9-0
// // razeniCenaSestupne.addEventListener("click", function () {
// //     for (let i = 0; i < objekty.length; i++) {
// //         objekty.sort(function (a, b) {
// //             return b.Cena - a.Cena;
// //         });
// //         produkt.innerHTML = objekty[i].Produkt;
// //         cena.innerHTML = objekty[i].Cena + " Kč";

// //     }

// // }); // konec razeni 9-0 

// // localStorage.setItem("produktyKosik", JSON.stringify(objekty)); // ulozeni objektu do local storage
// // if (!localStorage.getItem("kosik")) {
// //     localStorage.setItem("kosik", "[]");
// // }
// // let polozky = JSON.parse(localStorage.getItem("produktyKosik")); // nacteni objektu z local storage
// // let kosik = JSON.parse(localStorage.getItem("kosik")); // nacteni kosiku z local storage
// // console.log(polozky); // vypis vsech polozek

// // function pridatDoKosiku(produktNazev) {
// //     let produkt = polozky.find(function (produkt) {
// //         return produkt.Produkt === produktNazev;
// //     });
// //     kosik.push(produkt);
// //     localStorage.setItem("kosik", JSON.stringify(kosik));
// // }
