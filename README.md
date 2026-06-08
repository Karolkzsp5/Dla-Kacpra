# 🎮 Webowe Minigry - Platforma Rozrywkowa

Interaktywna platforma przeglądarkowa skupiająca w sobie zbiór minigier. Główną inspiracją do stworzenia tego projektu była chęć przygotowania wyjątkowego prezentu urodzinowego dla mojego brata, Kacpra ❤️. Aplikacja została zaprojektowana i zaprogramowana od podstaw przy użyciu czystego JavaScriptu, HTML5 oraz CSS3, bez wykorzystania frameworków czy zewnętrznych bibliotek. Projekt demonstruje płynne zarządzanie stanem, manipulację modelem DOM, asynchroniczność (Timery) oraz responsywne podejście do interfejsu użytkownika.

## 🧩 Dostępne gry (Moduły)

### 1. 🧠 Quizy
Rozbudowany system testowy oferujący 30 pytań z różnych dziedzin (logistyka, język angielski, informatyka, geografia i historia).
* **Funkcjonalności:** 
  * Płynna nawigacja poprzez interaktywne zakładki (śledzenie rozwiązywanych i aktywnych pytań).
  * System oceniania w czasie rzeczywistym – po zatwierdzeniu testu poprawne odpowiedzi oznaczane są na zielono, a błędne (oraz pominięte) na czerwono.
  * Zabezpieczenie przed zmianą odpowiedzi po zakończeniu gry.
  * Ukryta nagroda odblokowywana po zdobyciu minimum 15 punktów.

### 2. 🔤 Wisielec
Cyfrowa wersja klasycznej gry słownej polegającej na odgadywaniu ukrytego hasła litera po literze.
* **Funkcjonalności:**
  * System wielu rund – gra prowadzi użytkownika przez serię zróżnicowanych haseł z podziałem na kategorie.
  * Interaktywna klawiatura ekranowa, która dynamicznie blokuje i wyszarza użyte już litery.
  * Mechanizm zliczania błędów (maksymalnie 8 pomyłek), z płynną zmianą grafik szubienicy.
  * Ukryta nagroda odblokowywana po ukończeniu wszystkich trzech poziomów.

### 3. 🔍 Znajdź różnice
Gra na spostrzegawczość polegająca na odnajdywaniu ukrytych nieścisłości na obrazku.
* **Funkcjonalności:** 
  * Reagujące na kliknięcie, ukryte strefy na ilustracji.
  * Dynamiczny licznik (0/10) aktualizujący się w czasie rzeczywistym po odnalezieniu każdej różnicy.
  * Blokada wielokrotnego klikania w ten sam znaleziony element.
  * Automatyczne wykrywanie stanu zwycięstwa i wyświetlenie ukrytego panelu z nagrodą z odpowiednim opóźnieniem (setTimeout).

## 🛠️ Wykorzystane technologie

* **HTML5** – semantyczna struktura aplikacji i wielostronicowa architektura.
* **CSS3** – niestandardowe style z wykorzystaniem nowoczesnych technik takich jak Flexbox, animacje (`@keyframes fadeIn`), płynne tranzycje oraz unikalne interfejsy dla każdego modułu gry.
* **JavaScript (ES6+)** – cała logika gier: obsługa zdarzeń (Event Listeners), iteracja po strukturach danych (tablice, obiekty), walidacja wyników, zmiana atrybutów DOM (np. manipulacja ścieżkami obrazków `src`) i dynamiczne renderowanie elementów na stronie.

## 🚀 Uruchomienie projektu lokalnie

Projekt jest aplikacją typu "Client-side" (działa w całości w przeglądarce klienta) i nie wymaga instalacji pakietów Node.js ani baz danych. 

1. Sklonuj repozytorium na swój dysk:
```bash
   git clone https://github.com/Karolkzsp5/Dla-Kacpra
```
2. Otwórz folder z projektem w edytorze kodu (np. WebStorm, VS Code).
3. Uruchom plik `index.html` za pomocą wbudowanego serwera deweloperskiego (np. funkcja przeglądarki w WebStormie lub *Live Server* w VS Code).
   * Możesz też użyć prostego polecenia w terminalu, jeśli wolisz:
     * **Node.js**: `npx http-server`
     * **Python**: `python -m http.server`

## 📁 Struktura katalogów

* `index.html` - strona główna platformy z menu wyboru gier.
* `quizy.html`, `gra_wisielec.html`, `znajdz_roznice.html` - pliki widoków poszczególnych modułów.
* `/css/` - arkusze stylów (w tym współdzielony `style-index.css` oraz odrębne style dla każdej gry).
* `/js/` - skrypty JavaScript zawierające logikę poszczególnych aplikacji.
* `/img/` - zasoby graficzne podzielone na podkatalogi dla poszczególnych gier (np. etapy szubienicy, plansze do znajdowania różnic).

## 👨‍💻 Autor

**Karol Kondracki** © 2026
