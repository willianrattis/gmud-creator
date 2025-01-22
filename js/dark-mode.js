document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleModeButton = document.getElementById("toggle-mode");
    const modeIcon = document.getElementById("mode-icon");
    const modeText = document.getElementById("mode-text");
    const navbar = document.querySelector(".navbar");
    const footer = document.querySelector(".footer");
    const modalContent = document.querySelector(".modal-content");
    const preElement = document.getElementById("output");

    // Verificar modo salvo no localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    if (isDarkMode) {
        enableDarkMode();
    }

    toggleModeButton.addEventListener("click", () => {
        const darkModeEnabled = body.classList.toggle("dark-mode");

        if (darkModeEnabled) {
            enableDarkMode();
        } else {
            enableLightMode();
        }

        localStorage.setItem("darkMode", darkModeEnabled);
    });

    function enableDarkMode() {
        body.classList.add("dark-mode");

        // Navbar alterações
        navbar?.classList.remove("navbar-light", "bg-light");
        navbar?.classList.add("navbar-dark", "bg-dark");

        // Footer alterações
        footer?.classList.remove("bg-light");
        footer?.classList.add("dark-mode");

        // Modal e pre alterações
        modalContent?.classList.add("dark-mode");
        preElement?.classList.remove("bg-light");
        preElement?.classList.add("bg-dark");

        modeIcon.textContent = "☀️";
        modeText.textContent = "Light Mode";
    }

    function enableLightMode() {
        body.classList.remove("dark-mode");

        // Navbar alterações
        navbar?.classList.remove("navbar-dark", "bg-dark");
        navbar?.classList.add("navbar-light", "bg-light");

        // Footer alterações
        footer?.classList.remove("dark-mode");
        footer?.classList.add("bg-light");

        // Modal e pre alterações
        modalContent?.classList.remove("dark-mode");
        preElement?.classList.remove("bg-dark");
        preElement?.classList.add("bg-light");

        modeIcon.textContent = "🌙";
        modeText.textContent = "Dark Mode";
    }
});
