document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Validate form inputs
    if (name && email && message) {
        // Simulate form submission
        document.getElementById('responseMessage').textContent = 'Thank you for your message, ' + name + '! We will get back to you shortly.';
        
        // Clear form inputs
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill out all fields.';
    }
});