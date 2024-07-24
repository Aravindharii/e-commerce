// Add event listener to the form to handle the submit event
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Clear previous error messages
    clearErrors();

    // Get the values entered by the user
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate the form and display the appropriate messages
    if (validateForm(username, password)) {
        window.location.href='index.html';
        alert('Login successful!');
    }
});

// Function to validate the username and password
function validateForm(username, password) {
    let isValid = true;

    // Validate the username
    if (username !== 'user') {
        showError('usernameError', 'Invalid username. Please try again.');
        isValid = false;
    }

    // Validate the password
    if (password !== 'admin') {
        showError('passwordError', 'Invalid password. Please try again.');
        isValid = false;
    }

    return isValid;
}

// Function to clear previous error messages
function clearErrors() {
    document.getElementById('usernameError').style.display = 'none';
    document.getElementById('passwordError').style.display = 'none';
}

// Function to show an error message
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
    errorElement.style.display = 'block';
}
