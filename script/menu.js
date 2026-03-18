// script/menu.js
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os links de navegação do seu HTML
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    // Pega o header
    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            if (!href || href === '') return; // Ignora links vazios
            
            const target = document.querySelector(href);
            if (target) {
                const targetPosition = target.offsetTop - headerHeight + 50;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});