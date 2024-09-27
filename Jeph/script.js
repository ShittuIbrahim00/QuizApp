document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;

    // Validate Name
    if (!nameRegex.test(nameValue)) {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    // Validate Email
    if (!emailRegex.test(emailValue)) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (isValid) {
        // Save to localStorage
        let users = JSON.parse(localStorage.getItem('quizUsers')) || [];
        
        const user = {
            name: nameValue,
            email: emailValue
        };

        users.push(user);
        localStorage.setItem('quizUsers', JSON.stringify(users));

        // Clear form after submission
        nameInput.value = '';
        emailInput.value = '';

        // Redirect to another page
        window.location.href = 'quiz.html'; // Change this to your landing page URL
    }
});