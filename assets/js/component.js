async function loadComponent(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        const html = await response.text();

        document.getElementById(id).innerHTML = html;
    } catch (err) {
        console.error(err);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    loadComponent("navbar-container", "components/navbar.html");
    loadComponent("footer-container", "components/footer.html");
});