// Mobile - Hide menu on click

const hideButton = document.getElementById('hide-button')
const menuButton = document.getElementById('open-menu');

hideButton.addEventListener('click', function() {
  const menu = document.getElementById('hide')
  menu.classList.add("hidden");
  console.log('clicked')
});

menuButton.addEventListener('click', function(e) {
  e.preventDefault();
  const menu = document.getElementById('hide')
  menu.classList.remove('hidden');
});

