document.addEventListener("DOMContentLoaded", () => {
    const htmlEl = document.documentElement;
    const toggleBtn = document.getElementById("toggle-darkmode");

    if (!toggleBtn) {
        console.warn("[theme.js] -> Kein Button gefunden!");
        return;
    }

    toggleBtn.addEventListener("click", () => {
        if (htmlEl.classList.contains("dark")) {
            console.log("[theme.js] -> Entferne Dark Mode");
            htmlEl.classList.remove("dark");
        } else {
            console.log("[theme.js] -> Aktiviere Dark Mode");
            htmlEl.classList.add("dark");
        }
    });
});
