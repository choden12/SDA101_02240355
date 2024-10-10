document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    function validateForm() {
        let isFormValid = true;

        // Username validation
        if (usernameInput.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            isFormValid = false;
        } else {
            usernameError.textContent = '';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isFormValid = false;
        } else {
            emailError.textContent = '';
        }

        // Password validation
        if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters long';
            isFormValid = false;
        } else {
            passwordError.textContent = '';
        }

        // Confirm password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            isFormValid = false;
        } else {
            confirmPasswordError.textContent = '';
        }

        // Enable or disable submit button
        submitBtn.disabled = !isFormValid;
    }

    // Attach event listeners for input fields
    usernameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    // Prevent form submission if there are validation errors
    document.getElementById('registrationForm').addEventListener('submit', (event) => {
        validateForm(); // Ensure validation before submitting
        if (submitBtn.disabled) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });
});