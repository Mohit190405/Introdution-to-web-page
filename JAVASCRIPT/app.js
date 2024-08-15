document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Handle login (e.g., send data to the server)
            console.log('Logging in with', username, password);
            alert('Login successful!');
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent default form submission

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Handle registration (e.g., send data to the server)
            console.log('Registering with', username, email, password);
            alert('Registration successful!');
        });
    }
});
