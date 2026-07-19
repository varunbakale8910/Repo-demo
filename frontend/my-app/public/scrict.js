// Select all project list items
const projects = document.querySelectorAll("li");

// Add click event to each project
projects.forEach((project) => {
    project.addEventListener("click", () => {

        // Remove previous selection
        projects.forEach((item) => item.classList.remove("active"));

        // Highlight selected project
        project.classList.add("active");

        // Show selected project name
        alert("You selected:\n\n" + project.textContent);
    });
});

// Welcome message
window.addEventListener("load", () => {
    console.log("Project List Loaded Successfully!");
});