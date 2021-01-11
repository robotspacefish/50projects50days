const panels = document.querySelectorAll('.panel');

const removeActiveClasses = () => panels.forEach(p => p.classList.remove('active'));

panels.forEach(p => {
  p.addEventListener('click', () => {
    removeActiveClasses();
    p.classList.add('active');
  });
});
