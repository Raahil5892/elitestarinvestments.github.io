const reveals = document.querySelectorAll(".reveal");

function revealElements() {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealElements);
revealElements();
