emailjs.init("7XaIX1nvgm0GOOTVf");

const darkToggle = document.querySelector('.dark-toggle');
darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const icon = darkToggle.querySelector('i');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

$('.js-scroll-trigger').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000, 'easeInOutExpo');
            return false;
        }
    }
});

$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    emailjs.send('service_ebsbwgg', 'template_6bmm5yi', {
        name: name,
        email: email,
        subject: subject,
        message: message
    }).then(() => {
        alert('Message sent successfully!');
        contactForm.reset();
    }, (error) => {
        console.error('FAILED...', error);
        alert('Failed to send message. Please try again later.');
    });
});

const sections = document.querySelectorAll('.section');
function revealSections() {
    const triggerBottom = window.innerHeight * 0.85;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealSections);
revealSections();

const skillProgressBars = document.querySelectorAll('.skill-progress');
function animateSkills() {
    skillProgressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.9;
        if (barTop < triggerBottom && bar.style.width === "0px") {
            bar.style.width = bar.getAttribute('data-progress');
        }
    });
}
window.addEventListener('scroll', animateSkills);
animateSkills();

const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});
backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('currentYear').textContent = new Date().getFullYear();

const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = document.querySelector('.hero').offsetHeight;

let gradientShift = 0;
function animateHero() {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, `hsl(${gradientShift % 360}, 70%, 50%)`);
    gradient.addColorStop(1, `hsl(${(gradientShift + 60) % 360}, 60%, 45%)`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    gradientShift += 0.5;
    requestAnimationFrame(animateHero);
}
animateHero();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = document.querySelector('.hero').offsetHeight;
});
