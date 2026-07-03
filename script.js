// script.js
document.addEventListener('DOMContentLoaded', function() {
    // AOS Init
    AOS.init({
        duration: 1000,
        once: true
    });

    // Typed.js
    new Typed('#typed-text', {
        strings: [
            'Cybersecurity Engineer',
            'Full Stack Architect',
            'Ethical Hacker',
            'Cloud Security Expert'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true
    });

    // Particles.js
    particlesJS('particles-js', {
        particles: {
            number: { value: 80 },
            color: { value: '#38bdf8' },
            shape: { type: 'circle' },
            opacity: { value: 0.4 },
            size: { value: 3 },
            move: { enable: true, speed: 1 }
        },
        interactivity: {
            events: {
                onhover: { enable: true, mode: 'repulse' }
            }
        }
    });

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    let isDark = false;
    
    themeToggle.addEventListener('click', () => {
        isDark = !isDark;
        document.body.classList.toggle('dark-mode', isDark);
        themeToggle.innerHTML = isDark ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    });

    // Scroll Progress
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("scroll-progress").style.width = scrolled + "%";
    });

    // Navbar active link
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Fake Portfolio Projects
    const projects = [
        {
            title: "SecureVault Banking Platform",
            category: "security",
            img: "https://picsum.photos/id/1015/600/400",
            desc: "Zero-trust banking application with biometric authentication",
            tech: "React • Node • MongoDB • AWS"
        },
        {
            title: "PhishGuard AI",
            category: "security",
            img: "https://picsum.photos/id/201/600/400",
            desc: "Machine learning powered phishing detection system",
            tech: "Python • TensorFlow • FastAPI"
        },
        // Add more as needed
    ];

    const portfolioGrid = document.getElementById('portfolio-grid');
    projects.forEach(project => {
        const cardHTML = `
            <div class="col-md-6 col-lg-4 portfolio-item" data-category="${project.category}">
                <div class="card h-100">
                    <img src="${project.img}" class="card-img-top" alt="${project.title}">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text text-muted">${project.desc}</p>
                        <small class="text-primary">${project.tech}</small>
                    </div>
                    <div class="card-footer bg-transparent border-0 d-flex gap-2">
                        <a href="#" class="btn btn-outline-primary btn-sm flex-fill">Live Demo</a>
                        <a href="#" class="btn btn-primary btn-sm flex-fill">GitHub</a>
                    </div>
                </div>
            </div>
        `;
        portfolioGrid.innerHTML += cardHTML;
    });

    // Loading Screen
    setTimeout(() => {
        document.getElementById('loading-screen').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 600);
    }, 1800);

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been received. (Demo)");
        contactForm.reset();
    });

    console.log('%cPortfolio loaded successfully ✨', 'color: #2563eb; font-size: 14px; font-family: monospace');
});