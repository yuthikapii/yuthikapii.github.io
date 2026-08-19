window.addEventListener("load", () => {
    const heroText = document.querySelector(".hero-text");
    heroText.style.opacity = "0";
    heroText.style.transition = "opacity 2s ease";

    setTimeout(() => {
        heroText.style.opacity = "1";
    }, 300);
});

