const boxes = document.querySelectorAll('.box');

function checkBoxes() {
  const triggerBottom = window.innerHeight / 6 * 4; /** adjust first number to where you want the fold */

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkBoxes);

// run to show initial content
checkBoxes();