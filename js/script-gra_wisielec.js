const rundy = [
    { haslo: "Kura domowa",         fragmentKlucza: "XXXX-", kategoria: "Zwierzęta" },
    { haslo: "Red Dead Redemption", fragmentKlucza: "YYYY-", kategoria: "Gra" },
    { haslo: "Google",              fragmentKlucza: "ZZZZ",  kategoria: "Korporacja" }
];

let obecnaRunda = 0;
let haslo = rundy[obecnaRunda].haslo.toUpperCase();
let licznikBledow = 0;
let trafioneLitery = [];

const poleHasla = document.querySelector("#haslo");
const klawiatura = document.querySelectorAll(".litera");
const obrazekWisielca = document.querySelector("#obrazek_wisielec");
const runda = document.querySelector("#licznikRund");
const kategoria = document.querySelector("#kategoria");
const wyswietlLicznikBledow = document.querySelector("#licznikBledow");

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
            alert("Świetnie! Zdobywasz fragment kodu: " + rundy[obecnaRunda].fragmentKlucza);
            obecnaRunda++;
            przygotujNowaRunde();
        }, 300);
    }
}

function przygotujNowaRunde() {
    if (obecnaRunda >= rundy.length) {
        alert("Gratulacje Kapi! Odgadłeś wszystkie hasła! Pełny kod do gry to: " +
            rundy[0].fragmentKlucza + rundy[1].fragmentKlucza + rundy[2].fragmentKlucza);
        return;
    }

    runda.innerHTML = (obecnaRunda + 1).toString();
    kategoria.innerHTML = rundy[obecnaRunda].kategoria.toString();

    haslo = rundy[obecnaRunda].haslo.toUpperCase();
    licznikBledow = 0;
    trafioneLitery = [];

    wyswietlLicznikBledow.innerHTML = licznikBledow + "/8";
    obrazekWisielca.src = `../img/wisielec/s0.png`;

    // Odblokowujemy literki
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
            obrazekWisielca.src = `../img/wisielec/s${licznikBledow}.png`;

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