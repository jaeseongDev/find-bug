document.addEventListener('DOMContentLoaded', (event) => {
  const loadButton = document.getElementById('loadButton');
  const contentDiv = document.getElementById('content');

  loadButton.addEventListener('click', () => {
    loadContent();
  });

  function loadContent() {
    contentDiv.innerHTML = '';

    for (let i = 1; i <= 100; i++) {
      let item = document.createElement('div');
      item.className = 'item';
      item.innerText = 'Item ' + i;
      item.addEventListener('click', () => alert('You clicked on ' + item.innerText));
      contentDiv.appendChild(item);
    }
  }
});
