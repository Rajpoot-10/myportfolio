function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }

  const projects = document.querySelectorAll('.project-card');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

projects.forEach(project => {
  observer.observe(project);
});