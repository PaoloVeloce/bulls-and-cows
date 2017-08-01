$(document).ready(function() {

  let selectedColor = '';

  $('.selector-inner').click(function () { // при клике на кружок ...
    $('.selector-outer').css('background-color', 'blue'); // окак, предудущий загорвшийся кружок гаснет
    let peg = ($(this).parent())[0]; // переменная peg равна родительскому классу (selector-outer)
    selectedColor = $(this).css('background-color'); // переменная color равна цвету фона
    $(peg).css('background-color', selectedColor); // поменять фон на цвет кружка
    console.log(selectedColor);
  });
});
