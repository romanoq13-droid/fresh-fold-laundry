// Add event listener to button to get a quote
document.querySelector('button').addEventListener('click', () => {
    // Open a new window with a quote form
    window.open('quote.html', '_blank');
});

// Add event listener to form to send message
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Send message to server or email
    console.log('Message sent!');
});