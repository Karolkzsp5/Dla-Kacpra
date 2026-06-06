const odpowiedziElementy = document.querySelectorAll(".odpowiedzi");
const pytanieElement = document.querySelector("#pytanie");

const pytania_i_odpowiedzi = [
    {
        pytanie: "Co oznacza skrót \"RAM\"?",
        odpowiedzi: [
            "A) Random Access Memory",
            "B) Read Access Machine",
            "C) Rapid Application Module",
            "D) Read And Modify"
        ]
    }
];

odpowiedziElementy.forEach((el) => {
    el.addEventListener("click", () => {
        el.classList.toggle("active");
    });
});

function wyswietlPytania(elementPytania) {
    elementPytania.innerHTML = pytania_i_odpowiedzi[0].pytanie;
}

function wyswietlOdpowiedzi(listaElementow) {
    listaElementow.forEach((el, index) => {
        const tekstOdpowiedzi = pytania_i_odpowiedzi[0].odpowiedzi[index];
        el.innerHTML = `<div class="checkbox-odpowiedzi"></div> ${tekstOdpowiedzi}`;
    });
}

wyswietlPytania(pytanieElement);
wyswietlOdpowiedzi(odpowiedziElementy);