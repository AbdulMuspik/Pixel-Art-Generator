document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("container");

    // Create grid
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            container.appendChild(cell);
        }
    }

    // Add event listener to each cell
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            this.classList.toggle("active");
        });
    });
});
