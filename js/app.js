document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Work cards data
    const works = [
        { name: 'Web 1', category: 'HTML - CSS', image: '../img/1.jpg' },
        { name: 'Web 2', category: 'HTML - CSS - JS', image: '../img/2.jpg' },
        { name: 'Web 3', category: 'HTML - CSS - PYTHON', image: '../img/3.jpg' },
        { name: 'Web 4', category: 'HTML - SASS', image: '../img/4.jpg' },
        { name: 'Web 5', category: 'HTML - SASS - PHP', image: '../img/5.jpg' },
        { name: 'Web 6', category: 'HTML - SASS - LARAVEL', image: '../img/6.jpg' },
        { name: 'Web 7', category: 'HTML - SASS - FLASK', image: '../img/7.jpg' },
        { name: 'Web 8', category: 'HTML - SASS - SYMFONY', image: '../img/8.jpg' }
    ];

    // Generate work cards
    const worksGrid = document.querySelector('.works-grid');
    works.forEach(work => {
        worksGrid.innerHTML += `
            <div class="work-card">
                <img src="${work.image}" alt="${work.name}" class="work-img">
                <div class="work-content">
                    <h3>${work.name}</h3>
                    <p>${work.category}</p>
                </div>
            </div>
        `;
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handler
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        alert('Mensaje enviado con éxito!');
        this.reset();
    });
});