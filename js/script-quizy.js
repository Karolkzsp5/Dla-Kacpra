const odpowiedziELement = document.querySelectorAll(".odpowiedzi");
const checkboxOdpowiedziElement = document.querySelectorAll(".checkbox-odpowiedzi");

odpowiedziELement.forEach((el) => {
    el.addEventListener("click", (e) => {
        e.target.classList.toggle("active");
    })
})