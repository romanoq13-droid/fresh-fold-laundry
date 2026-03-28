// Handle "Get a Quote" button on the Home Page
const quoteBtn = document.querySelector('#home button');
if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
        window.open('quote.html', '_blank');
    });
}

// Handle Form Submissions (Both Contact and Quote forms)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('Name'); // Note: You'll need to add name="Name" to your inputs
        
        alert(`Thank you, ${name || 'customer'}! Your message has been sent.`);
        form.reset();
    });
});