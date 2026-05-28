const obszarGry = document.querySelector("#obszar_gry img");
const znalezioneRoznice = document.querySelector("#znalezione-roznice");
const rozniceElementy = document.querySelectorAll(".roznica");

let clickCount = 0;

rozniceElementy.forEach((pojedynczaRoznica) => {

    pojedynczaRoznica.addEventListener("click", (e) => {
        clickCount++;
        znalezioneRoznice.innerHTML = clickCount;
        e.target.style.pointerEvents = "none";
        if (clickCount >= 10) {
            setTimeout(() => {

                window.location.reload();
            }, 400)
        }
        e.target.classList.add("odkryta");
    });

});