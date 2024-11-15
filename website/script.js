function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active');
    });

    // Show the selected section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.remove('hidden');
    activeSection.classList.add('active');
}

// Optional: Handle form submission
document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form telah dikirim!');
    this.reset();
});