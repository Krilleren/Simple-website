document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-bar a');
  const sections = document.querySelectorAll('.section');
  const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

  function showSection(sectionId) {
    sections.forEach(section => {
      section.style.display = section.id === sectionId ? 'block' : 'none';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const sectionId = this.getAttribute('data-section');
      showSection(sectionId);
    });
  });

  // Initialize collapsible sections
  collapsibleHeaders.forEach(header => {
    header.addEventListener('click', function () {
      const parentSection = this.parentElement;
      parentSection.classList.toggle('open');

      const content = parentSection.querySelector('.collapsible-content');
      const icon = this.querySelector('.toggle-icon');

      if (parentSection.classList.contains('open')) {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.textContent = '-';
      } else {
        content.style.maxHeight = '0';
        icon.textContent = '+';
      }
    });
  });

  // Show the home section by default
  showSection('home');
});
