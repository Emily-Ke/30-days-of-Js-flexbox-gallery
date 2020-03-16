const body = document.querySelector('body');

const galleryElement = document.createElement('div');
galleryElement.classList.add('gallery');

"Let's take it all in".split(' ').forEach(panelText => {
  const panelElement = document.createElement('div');

  const textElement = document.createElement('span');
  textElement.textContent = panelText;
  panelElement.appendChild(textElement);

  panelElement.classList.add('panel');

  panelElement.addEventListener('mouseenter', ({ target }) =>
    target.classList.add('panel-active')
  );
  panelElement.addEventListener('mouseleave', ({ target }) =>
    target.classList.remove('panel-active')
  );

  galleryElement.appendChild(panelElement);
});

body.prepend(galleryElement);
