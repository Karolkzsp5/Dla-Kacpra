const odpowiedziElementy = document.querySelectorAll(".odpowiedzi");
const pytanieElement = document.querySelector("#pytanie");
const licznikPytanElement = document.querySelector("#licznik-pytan");
const nastepnePytanieBtn = document.querySelector(".dolny-panel-przycisk-2");
const sprawdzOdpowiedziBtn = document.querySelector(".dolny-panel-przycisk-1");
const statystykiElement = document.querySelector("#quiz-statystyki");
const wygranaInfo = document.querySelector("#wygrana-info");
const zakladkiElementy = document.querySelectorAll(".zakladka_pytania");

const pytania_i_odpowiedzi = [

    /*
    --------------------
    Pytania - Logistyka
    --------------------
    */

    {
        pytanie: "Jakie są cztery główne fazy procesu magazynowego?",
        odpowiedzi: [
            "A) Przyjmowanie, składowanie, kompletacja, wydawanie",
            "B) Składowanie, wydawanie, dowóz",
            "C) Zamówienie, kompletacja, odebranie, wydawanie",
            "D) Budowa, zagospodarowanie przestrzeni, przyjęcie pracowników"
        ],
        poprawna: 0
    },

    {
        pytanie: "Na podstawie jakiej zasady zbudowana jest analiza ABC?",
        odpowiedzi: [
            "A) Zasady Deminga (70/30)",
            "B) Zasady Deminga (75/25)",
            "C) Zasady Pareto (80/20)",
            "D) Zasady Pareto (60/40)"
        ],
        poprawna: 2
    },

    {
        pytanie: "Czym jest czas transportu?",
        odpowiedzi: [
            "A) Czas, w jakim towar znajduje się w środku transportu.",
            "B) Czas, w jakim kierowca pokonuje trasę, wyłączając jego przerwy.",
            "C) Czas procesu transportowego od rozpoczęcia załadunku w punkcie A, przez czynności związane z przewozem i obsługą ładunku, aż do zakończenia rozładunku w punkcie B.",
            "D) Czas procesu transportowego liczony od momentu zamówienia w punkcie A, przez czynności związane z obsługą i przewozem, aż do odebrania zamówienia w punkcie B."
        ],
        poprawna: 2
    },

    {
        pytanie: "Jakie wyroby są przechowywane w magazynach półotwartych?",
        odpowiedzi: [
            "A) Wyroby, na które nie ma miejsca w magazynie zamkniętym.",
            "B) Wyroby, które są bardzo ciężkie i w magazynie zamkniętym nie spełniałyby przepisów bhp i przeciwpożarowych.",
            "C) Wyroby, które są nie są dla przedsiębiorstwa najcenniejsze, dlatego nie wymagają ochrony ani szczególnej dbałości.",
            "D) Wyroby o ograniczonej odporności na warunki atmosferyczne, czyli nieodporne na działanie promieni słonecznych i opadów."
        ],
        poprawna: 3
    },

    {
        pytanie: "Wskaż poprawny ciąg kanału dystrybucji jabłek",
        odpowiedzi: [
            "A) Hurtownia, Sad, Magazyn, Sklep",
            "B) Sklep, Sad, Hurtownia, Magazyn, Klient",
            "C) Sad, Skup, Hurtownia, Sklep, Klient",
            "D) Sad, Sklep, Klient"
        ],
        poprawna: 2
    },

    /*
    -------------------------
    Pytania - Język angielski
    -------------------------
     */

    {
        pytanie: "Co oznacza angielskie słowo 'actually'?",
        odpowiedzi: [
            "A) Aktualnie",
            "B) Obecnie",
            "C) Właściwie / W rzeczy samej",
            "D) Aktywnie"
        ],
        poprawna: 2
    },

    {
        pytanie: "Który z poniższych czasowników oznacza 'zrezygnować z czegoś' lub 'poddać się'?",
        odpowiedzi: [
            "A) take off",
            "B) look after",
            "C) give up",
            "D) bring up"
        ],
        poprawna: 2
    },

    {
        pytanie: "Jak poprawnie zamienić to zdanie na stronę bierną? 'They built this house in 1990.'",
        odpowiedzi: [
            "A) This house is built in 1990.",
            "B) This house was built in 1990.",
            "C) This house built in 1990.",
            "D) This house has been built in 1990."
        ],
        poprawna: 1
    },

    {
        pytanie: "Jakiego przyimka użyjesz w zdaniu: 'I am very interested _____ learning new languages.'?",
        odpowiedzi: [
            "A) in",
            "B) at",
            "C) of",
            "D) on"
        ],
        poprawna: 0
    },

    {
        pytanie: "Wybierz angielski synonim do słowa 'exhausted':",
        odpowiedzi: [
            "A) very happy",
            "B) very tired",
            "C) very angry",
            "D) very hungry"
        ],
        poprawna: 1
    },

    {
        pytanie: "Co oznacza popularny angielski idiom 'a piece of cake'?",
        odpowiedzi: [
            "A) Kawałek tortu",
            "B) Coś bardzo prostego (Bułka z masłem)",
            "C) Coś bardzo drogiego",
            "D) Zaskakujące wydarzenie"
        ],
        poprawna: 1
    },

    {
        pytanie: "Które z tych słów NIE jest synonimem słowa 'important'?",
        odpowiedzi: [
            "A) Crucial",
            "B) Essential",
            "C) Reluctant",
            "D) Significant"
        ],
        poprawna: 2
    },

    {
        pytanie: "Wybierz poprawny zaimek: 'The man _____ car was stolen is my neighbour.'",
        odpowiedzi: [
            "A) who",
            "B) which",
            "C) that",
            "D) whose"
        ],
        poprawna: 3
    },

    /*
    ----------------------
    Pytania - Informatyka
    ----------------------
    */

    {
        pytanie: "Co oznacza skrót \"RAM\"?",
        odpowiedzi: [
            "A) Random Access Memory",
            "B) Read Access Machine",
            "C) Rapid Application Module",
            "D) Read And Modify"
        ],
        poprawna: 0
    },

    {
        pytanie: "Które z poniższych stwierdzeń najlepiej opisuje różnicę między dyskami HDD a SSD?",
        odpowiedzi: [
            "A) Dyski HDD wykorzystują pamięć flash, podczas gdy SSD opierają się na odczycie laserowym.",
            "B) Dyski SSD służą wyłącznie do instalacji systemu operacyjnego, a HDD do przechowywania pozostałych plików.",
            "C) Dyski HDD są całkowicie odporne na uszkodzenia mechaniczne w przeciwieństwie do delikatnych nośników SSD.",
            "D) Dyski SSD nie posiadają ruchomych talerzy magnetycznych, co drastycznie skraca czas dostępu do danych."
        ],
        poprawna: 3
    },

    {
        pytanie: "Co jest głównym zadaniem procesora (CPU) w komputerze?",
        odpowiedzi: [
            "A) Tymczasowe buforowanie danych przesyłanych między pamięcią operacyjną a dyskiem twardym.",
            "B) Pobieranie, dekodowanie i wykonywanie sekwencyjnych instrukcji programów.",
            "C) Sprzętowa akceleracja renderowania obiektów trójwymiarowych i fizyki obrazu.",
            "D) Zarządzanie podziałem przepustowości magistrali PCIe dla kart rozszerzeń."
        ],
        poprawna: 1
    },

    {
        pytanie: "Jaka jest główna rola tzw. 'pamięci wirtualnej' (Virtual Memory) w systemie operacyjnym?",
        odpowiedzi: [
            "A) Tworzenie odizolowanych środowisk testowych (tzw. piaskownic) dla podejrzanych plików systemowych.",
            "B) Zapewnienie sprzętowego szyfrowania kluczy kryptograficznych i haseł użytkowników w wydzielonym obszarze jądra.",
            "C) Pozwalanie na wykonywanie programów, których zapotrzebowanie przekracza fizycznie dostępną pamięć RAM, poprzez wykorzystanie przestrzeni na dysku.",
            "D) Tworzenie bezstratnych i niewidocznych kopii zapasowych otwartych plików do czasu ponownego uruchomienia komputera."
        ],
        poprawna: 2
    },
    {
        pytanie: "Jaką funkcję pełni pamięć podręczna (Cache L1/L2/L3) w nowoczesnych procesorach?",
        odpowiedzi: [
            "A) Zabezpiecza rdzenie procesora przed nagłymi skokami napięcia na płycie głównej.",
            "B) Działa jako ultraszybki bufor między rdzeniami a wolniejszą pamięcią RAM, przechowując najczęściej używane instrukcje.",
            "C) Przechowuje logi z krytycznymi błędami systemu (tzw. zrzuty pamięci) do późniejszej diagnozy.",
            "D) Odpowiada za bezpośrednią komunikację między dyskiem NVMe a kartą graficzną z pominięciem procesora głównego."
        ],
        poprawna: 1
    },

    {
        pytanie: "Na czym w cyberbezpieczeństwie polega fundamentalna zasada 'Najmniejszego Uprzywilejowania' (Least Privilege)?",
        odpowiedzi: [
            "A) Przyznawaniu użytkownikom i aplikacjom tylko i wyłącznie tych uprawnień, które są absolutnie niezbędne do wykonania ich zadań.",
            "B) Dynamicznym ograniczaniu mocy obliczeniowej dla aplikacji działających w tle, aby zapobiec atakom typu DDoS.",
            "C) Automatycznym blokowaniu dostępu do firmowej sieci wszystkim nowym urządzeniom zewnętrznym na okres kwarantanny.",
            "D) Wymuszaniu resetowania haseł administracyjnych przy każdej próbie dostępu do serwerów z zewnątrz."
        ],
        poprawna: 0
    },

    /*
    --------------------
    Pytania - Geografia
    --------------------
    */

    {
        pytanie: "Jak nazywa się najdłuższy kontynentalny łańcuch górski na Ziemi, położony w Ameryce Południowej?",
        odpowiedzi: [
            "A) Andy",
            "B) Kordyliery",
            "C) Himalaje",
            "D) Alpy"
        ],
        poprawna: 0
    },

    {
        pytanie: "Które państwo w Afryce ma największą liczbę ludności?",
        odpowiedzi: [
            "A) Egipt",
            "B) Republika Południowej Afryki (RPA)",
            "C) Nigeria",
            "D) Kenia"
        ],
        poprawna: 2
    },

    {
        pytanie: "Jak nazywa się zewnętrzna, sztywna powłoka Ziemi, która obejmuje skorupę ziemską oraz najwyższą, stałą część płaszcza Ziemi?",
        odpowiedzi: [
            "A) Astenosfera",
            "B) Litosfera",
            "C) Troposfera",
            "D) Mezosfera"
        ],
        poprawna: 1
    },

    {
        pytanie: "Jak nazywa się cieśnina oddzielająca Europę od Afryki?",
        odpowiedzi: [
            "A) Cieśnina Bosfor",
            "B) Kanał La Manche",
            "C) Cieśnina Magellana",
            "D) Cieśnina Gibraltarska"
        ],
        poprawna: 3
    },

    {
        pytanie: "Które europejskie państwo jest często nazywane 'Krajem Tysiąca Jezior' ze względu na swoją unikalną rzeźbę terenu?",
        odpowiedzi: [
            "A) Szwecja",
            "B) Finlandia",
            "C) Islandia",
            "D) Szwajcaria"
        ],
        poprawna: 1
    },

    {
        pytanie: "Najdłuższa rzeka w europie to:",
        odpowiedzi: [
            "A) Dunaj",
            "B) Wołga",
            "C) Wisła",
            "D) Sekwana"
        ],
        poprawna: 1
    },

    {
        pytanie: "W której warstwie atmosfery zachodzi zdecydowana większość zjawisk pogodowych i skupiona jest prawie cała para wodna?",
        odpowiedzi: [
            "A) W stratosferze",
            "B) W jonosferze",
            "C) W troposferze",
            "D) W mezosferze"
        ],
        poprawna: 2
    },

    {
        pytanie: "Który zbiornik wodny, ze względu na swoje ogromne rozmiary, nosi nazwę morza, choć z geograficznego punktu widzenia jest największym na świecie jeziorem?",
        odpowiedzi: [
            "A) Morze Śródziemne",
            "B) Morze Kaspijskie",
            "C) Morze Czerwone",
            "D) Morze Martwe"
        ],
        poprawna: 1
    },

    /*
    --------------------
    Pytania - Historia
    --------------------
    */

    {
        pytanie: "Przyjęcie chrztu przez Mieszka I i początek chrystianizacji Polski to rok:",
        odpowiedzi: [
            "A) 972",
            "B) 956",
            "C) 966",
            "D) 980"
        ],
        poprawna: 2
    },

    {
        pytanie: "Rok 1492 to data:",
        odpowiedzi: [
            "A) Odkrycia Ameryki przez Krzysztofa Kolumba",
            "B) Wynalezienia druku",
            "C) Koronacji Władysława Jagiełły",
            "D) Rozpoczęcia wojny stuletniej"
        ],
        poprawna: 0
    },

    {
        pytanie: "Powstanie warszawskie wybuchło 1 sierpnia 1944 roku i trwało:",
        odpowiedzi: [
            "A) 63 dni",
            "B) 57 dni",
            "C) 38 dni",
            "D) 155 dni"
        ],
        poprawna: 0
    }
];

const minLiczbaPunktow = 15;
let aktualnyIndeksPytania = 0;
let czySprawdzone = false;
const wybraneOdpowiedzi = new Array(pytania_i_odpowiedzi.length).fill(-1);

zakladkiElementy.forEach((zakladka, index) => {
    zakladka.addEventListener("click", () => {
        if (index >= pytania_i_odpowiedzi.length) {
            alert("To pytanie nie zostało jeszcze dodane do bazy!");
            return;
        }

        aktualnyIndeksPytania = index;
        odswiezEkran();
    });
});

function aktualizujWygladZakladek() {
    zakladkiElementy.forEach((zakladka, index) => {
        zakladka.classList.remove("aktywna", "rozwiazana");

        if (index === aktualnyIndeksPytania) {
            zakladka.classList.add("aktywna");
        }

        if (wybraneOdpowiedzi[index] !== -1) {
            zakladka.classList.add("rozwiazana");
        }
    });
}

odpowiedziElementy.forEach((el, index) => {
    el.addEventListener("click", () => {
        odpowiedziElementy.forEach(odp => odp.classList.remove("active"));
        el.classList.add("active");

        wybraneOdpowiedzi[aktualnyIndeksPytania] = index;

        aktualizujWygladZakladek();
    });
});

function odswiezEkran() {
    licznikPytanElement.innerHTML = `Pytanie ${aktualnyIndeksPytania + 1}:`;
    pytanieElement.innerHTML = pytania_i_odpowiedzi[aktualnyIndeksPytania].pytanie;

    const poprawna = pytania_i_odpowiedzi[aktualnyIndeksPytania].poprawna;
    const wyborGracza = wybraneOdpowiedzi[aktualnyIndeksPytania];

    odpowiedziElementy.forEach((el, numerOdpowiedzi) => {
        const tekstOdpowiedzi = pytania_i_odpowiedzi[aktualnyIndeksPytania].odpowiedzi[numerOdpowiedzi];
        el.innerHTML = `<div class="checkbox-odpowiedzi"></div> ${tekstOdpowiedzi}`;

        el.classList.remove("active", "dobra-odpowiedz", "zla-odpowiedz");

        if (!czySprawdzone) {
            if (wyborGracza === numerOdpowiedzi) {
                el.classList.add("active");
            }
        } else {
            if (numerOdpowiedzi === poprawna) {
                el.classList.add("dobra-odpowiedz");
            } else {
                if (wyborGracza === numerOdpowiedzi || wyborGracza === -1) {
                    el.classList.add("zla-odpowiedz");
                }
            }
        }
    });

    aktualizujWygladZakladek();

    if (aktualnyIndeksPytania === pytania_i_odpowiedzi.length - 1) {
        nastepnePytanieBtn.style.visibility = "hidden";
    } else {
        nastepnePytanieBtn.style.visibility = "visible";
    }
}

nastepnePytanieBtn.addEventListener("click", () => {
    aktualnyIndeksPytania++;
    odswiezEkran();
});

sprawdzOdpowiedziBtn.addEventListener("click", () => {
    let zdobytePunkty = 0;

    wybraneOdpowiedzi.forEach((wyborGracza, index) => {
        const poprawna = pytania_i_odpowiedzi[index].poprawna;
        if (wyborGracza === poprawna) {
            zdobytePunkty++;
        }
    });

    statystykiElement.style.display = "flex";
    const spanWynik = statystykiElement.querySelector("span");
    if (spanWynik) {
        spanWynik.innerHTML = ` ${zdobytePunkty}/${pytania_i_odpowiedzi.length}`;
    }

    if (zdobytePunkty >= minLiczbaPunktow) {
        wygranaInfo.style.visibility = "visible";
    }

    czySprawdzone = true;
    odpowiedziElementy.forEach(el => el.style.pointerEvents = "none");
    sprawdzOdpowiedziBtn.style.visibility = "hidden";

    odswiezEkran();
});

odswiezEkran();