// script.js

// Get all navigator links
const navLinks = document.querySelectorAll('.navigator a');

// Add click event listener to each link for smooth scrolling
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#education")
        const targetSection = document.querySelector(targetId); // Find the target section element

        if (targetSection) {
            // Scroll to the target section smoothly
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Modal functionality
const modal = document.getElementById('detailsModal');
const closeButton = document.querySelector('.close-button');
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

// Get modal content elements
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalTechnologies = document.getElementById('modalTechnologies');
const modalDescription = document.getElementById('modalDescription');
const modalLink = document.getElementById('modalLink');
const modalLinkContainer = document.getElementById('modalLinkContainer');


// Function to open the modal
function openModal(title, image, technologies, link, description) {
    modalTitle.textContent = title;
    modalImage.src = image;
    modalTechnologies.textContent = technologies;
    modalDescription.textContent = description;

    if (link && link !== '#') {
        modalLink.href = link;
        modalLinkContainer.style.display = 'block'; // Show the link button
    } else {
        modalLinkContainer.style.display = 'none'; // Hide the link button if no valid link
    }

    modal.style.display = 'flex'; // Use flex to center the modal content
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners for opening modal
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const title = this.dataset.title;
        const image = this.dataset.image;
        const technologies = this.dataset.technologies;
        const link = this.dataset.link;
        const description = this.dataset.description;
        openModal(title, image, technologies, link, description);
    });
});

// Event listener for closing modal via close button
closeButton.addEventListener('click', closeModal);

// Event listener for closing modal via clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        closeModal();
    }
});

// Event listener for closing modal via Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.style.display === 'flex') {
        closeModal();
    }
});
