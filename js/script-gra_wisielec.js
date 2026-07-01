const poleHasla = document.querySelector("#haslo");
const klawiatura = document.querySelectorAll(".litera");
const obrazekWisielca = document.querySelector("#obrazek_wisielec");
const runda = document.querySelector("#licznikRund");
const kategoria = document.querySelector("#kategoria");
const wyswietlLicznikBledow = document.querySelector("#licznikBledow");

const rundy = [
    { haslo: "Kura domowa",         kategoria: "Zwierzęta" },
    { haslo: "Red Dead Redemption", kategoria: "Gra" },
    { haslo: "Google",              kategoria: "Korporacja" }
];

let obecnaRunda = 0;
let haslo = rundy[obecnaRunda].haslo.toUpperCase();
let licznikBledow = 0;
let trafioneLitery = [];

function aktualizujHaslo() {
    let ukrytyTekst = "";

    for (let i = 0; i < haslo.length; i++) {
        if (haslo[i] === " ") {
            ukrytyTekst += "&nbsp;&nbsp;&nbsp;";
        } else if (trafioneLitery.includes(haslo[i])) {
            ukrytyTekst += haslo[i];
        } else {
            ukrytyTekst += "_";
        }
    }

    poleHasla.innerHTML = ukrytyTekst;

    if (!ukrytyTekst.includes("_")) {
        setTimeout(() => {
            if(obecnaRunda === 0){
                alert("Świetnie! Przechodzisz do drugiej rundy");
            }
            else if(obecnaRunda === 1){
                alert("Świetnie! Przechodzisz do trzeciej rundy");
            }
            obecnaRunda++;
            przygotujNowaRunde();
        }, 300);
    }
}

function przygotujNowaRunde() {
    if (obecnaRunda >= rundy.length) {
        alert("Gratulacje!!! Odgadłeś wszystkie hasła! Twoja nagroda to: ");
        obrazekWisielca.src = `img/wisielec/ishowspeed-wow.gif`
        return;
    }

    runda.innerHTML = (obecnaRunda + 1).toString();
    kategoria.innerHTML = rundy[obecnaRunda].kategoria.toString();

    haslo = rundy[obecnaRunda].haslo.toUpperCase();
    licznikBledow = 0;
    trafioneLitery = [];

    wyswietlLicznikBledow.innerHTML = licznikBledow + "/8";
    obrazekWisielca.src = `img/wisielec/s0.png`;

    // Odblokowanie literek na klawiaturze
    klawiatura.forEach(przycisk => {
        przycisk.classList.remove("zuzyta");
    });

    aktualizujHaslo();
}

// Główna logika klikania w klawiaturę
klawiatura.forEach(przycisk => {
    przycisk.addEventListener("click", (e) => {
        const kliknietaLitera = e.target.textContent.toUpperCase();

        przycisk.classList.add("zuzyta");

        if (haslo.includes(kliknietaLitera)) {
            trafioneLitery.push(kliknietaLitera);
            aktualizujHaslo();
        }
        else {
            licznikBledow++;
            wyswietlLicznikBledow.innerHTML = " " + licznikBledow + "/8";
            obrazekWisielca.src = `img/wisielec/s${licznikBledow}.png`;

            if (licznikBledow >= 8) {
                setTimeout(() => {
                    alert("Przegrałeś! Spróbuj jeszcze raz :)");
                    window.location.reload();
                }, 300);
            }
        }
    });
});

// Start gry
runda.innerHTML = " " + (obecnaRunda + 1) + " ";
kategoria.innerHTML = rundy[obecnaRunda].kategoria;
wyswietlLicznikBledow.innerHTML = " 0/8";
aktualizujHaslo();