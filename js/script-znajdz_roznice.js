const obszarGry = document.querySelector("#obszar_gry img");
const znalezioneRoznice = document.querySelector("#znalezione-roznice");
const rozniceElementy = document.querySelectorAll(".roznica");
const kontenerPodsumowanie = document.querySelector("#summary");

let clickCount = 0;

rozniceElementy.forEach((pojedynczaRoznica) => {

    pojedynczaRoznica.addEventListener("click", (e) => {
        clickCount++;
        znalezioneRoznice.innerHTML = clickCount + "/10";
        e.target.style.pointerEvents = "none";
        if (clickCount >= 10) {
            setTimeout(() => {
                kontenerPodsumowanie.classList.add("active");
            }, 400)
        }
        e.target.classList.add("odkryta");
    });

});