// Custom cursor
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Add lag effect to cursor outline
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Navbar scroll effect
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 0);
});

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
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

// Active navigation link update on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Projects data
const projects = [
    {
        title: "Project 1",
        description: "Description of project 1",
        image: "project1.jpg",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "#"
    },
    {
        title: "Project 2",
        description: "Description of project 2",
        image: "project2.jpg",
        technologies: ["React", "Node.js", "MongoDB"],
        link: "#"
    },
    // Add more projects as needed
];

// Dynamically populate projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
            <a href="${project.link}" class="btn primary-btn">View Project</a>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// Form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-item, .project-card, .section-title').forEach(el => {
    observer.observe(el);
});

// Hover effect for interactive elements
const interactiveElements = document.querySelectorAll('a, button, .skill-item');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        cursorOutline.style.backgroundColor = 'rgba(0, 255, 187, 0.1)';
    });

    el.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// Parallax effect for geometric shapes
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 2;
        shape.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});
