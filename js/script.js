// script.js

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const sidebarNav = document.querySelector('.sidebar-nav');
    const navLinks = sidebarNav.querySelectorAll('a');
    const sections = document.querySelectorAll('section[id]');

    // Toggle sidebar on mobile
    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('show');
    });

    // Function to handle active link highlighting on scroll
    const handleScroll = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    };

    // Smooth scrolling for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
                // Hide sidebar after clicking a link on mobile
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('show');
                }
            }
        });
    });

    // Modal functionality
    const modal = document.getElementById('detailsModal');
    if (modal) {
        const closeButton = modal.querySelector('.close-button');
        const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
        const modalTitle = document.getElementById('modalTitle');
        const modalImage = document.getElementById('modalImage');
        const modalTechnologies = document.getElementById('modalTechnologies');
        const modalDescription = document.getElementById('modalDescription');
        const modalLink = document.getElementById('modalLink');
        const modalLinkContainer = document.getElementById('modalLinkContainer');

        const openModal = (title, image, technologies, link, description) => {
            modalTitle.textContent = title;
            modalImage.src = image;
            modalTechnologies.textContent = technologies;
            modalDescription.textContent = description;

            if (link && link !== '#') {
                modalLink.href = link;
                modalLinkContainer.style.display = 'block';
            } else {
                modalLinkContainer.style.display = 'none';
            }
            modal.style.display = 'flex';
        };

        const closeModal = () => {
            modal.style.display = 'none';
        };

        viewDetailsButtons.forEach(button => {
            button.addEventListener('click', function() {
                openModal(
                    this.dataset.title,
                    this.dataset.image,
                    this.dataset.technologies,
                    this.dataset.link,
                    this.dataset.description
                );
            });
        });

        if (closeButton) {
            closeButton.addEventListener('click', closeModal);
        }

        window.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modal.style.display === 'flex') {
                closeModal();
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
});