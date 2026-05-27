// 1. Pobieramy nasz obrazek z HTML
const obrazekDoGry = document.querySelector("#obszar_gry img");

// 2. Nasłuchujemy kliknięć na tym konkretnym obrazku
obrazekDoGry.addEventListener("click", function(e) {

    // KROK 1: Gdzie dokładnie kliknęliśmy? (względem obrazka)
    const pozycjaKliknieciaX = e.offsetX;
    const pozycjaKliknieciaY = e.offsetY;

    // KROK 2: Jakie są wymiary obrazka w tym ułamku sekundy?
    // e.target odnosi się do elementu, który wywołał zdarzenie (czyli <img>)
    const szerokoscObrazka = e.target.offsetWidth;
    const wysokoscObrazka = e.target.offsetHeight;

    // KROK 3: Obliczamy procenty
    // Używamy metody .toFixed(2), aby uciąć wynik do 2 miejsc po przecinku (np. 45.33% zamiast 45.333333333333%)
    const procentX = ((pozycjaKliknieciaX / szerokoscObrazka) * 100).toFixed(2);
    const procentY = ((pozycjaKliknieciaY / wysokoscObrazka) * 100).toFixed(2);

    // KROK 4: Formatujemy wynik tak, by można go było od razu skopiować do CSS!
    const gotowyKodCSS = `left: ${procentX}%; top: ${procentY}%;`;

    // Wypisujemy wynik w konsoli przeglądarki (F12 -> Console)
    console.log(gotowyKodCSS);

    // Opcjonalny bonus: Kopiujemy wynik automatycznie do schowka!
    navigator.clipboard.writeText(gotowyKodCSS).then(() => {
        console.log("Skopiowano do schowka!");
    });
});