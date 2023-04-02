function dropMenu(name) {
  let currentDropContent = document.querySelector(name);
  if (currentDropContent.classList.contains('drop-content--showing')) {
    currentDropContent.classList.remove('drop-content--showing');
    return;
  }

  if (!window.event.target.matches(name)) {
    let dropContent = document.querySelectorAll('.drop-content');

    for (let i = 0; i < dropContent.length; i++) {
      let dropContentItem = dropContent[i];
      if (dropContentItem.classList.contains('drop-content--showing')) {
        dropContentItem.classList.remove('drop-content--showing');
      }
    }
  }

  let dropContentItem = document.querySelector(name);
  dropContentItem.classList.toggle('drop-content--showing');
}

window.addEventListener('click', (event) => {
  if (!event.target.matches('.drop-menu-button')) {
    let dropContent = document.querySelectorAll('.drop-content');

    for (let i = 0; i < dropContent.length; i++) {
      let dropContentItem = dropContent[i];
      if (dropContentItem.classList.contains('drop-content--showing')) {
        dropContentItem.classList.remove('drop-content--showing');
      }
    }
  }
})
