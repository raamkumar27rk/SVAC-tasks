// Welcome alert on page load
window.onload = function() {
    alert("Welcome to the Student Registration Page!");
};

// Function to validate form
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let department = document.getElementById("department").value;
    let year = document.getElementById("year").value;
    let project = document.getElementById("project").value.trim();

    if (!name || !email || !department || !year || !project) {
        alert("All fields are required!");
        return false;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return false;
    }
    return true;
}

// Handle form submission
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    if (validateForm()) {
        alert("Registration Successful");
        this.reset();
    }
});

// Activity Section Feature
let colors = ["#ffcccc", "#ccffcc", "#ccccff", "#fff0b3"];
let messages = [
    "You clicked the button! 🎉",
    "Color changed again! 🌈",
    "Keep clicking, it's fun! 😄",
    "You're amazing! 💯"
];

document.getElementById("clickMeBtn").addEventListener("click", function() {
    let activityText = document.getElementById("activityText");
    
    // Change color randomly from array
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    activityText.style.backgroundColor = randomColor;
    
    // Change text randomly
    let randomMessage = messages[Math.floor(Math.random() * messages.length)];
    activityText.textContent = randomMessage;
    
    // Add a class toggle for effect
    activityText.classList.toggle("highlight");
});
