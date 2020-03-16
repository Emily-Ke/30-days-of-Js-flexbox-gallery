const panelElements = document.querySelectorAll('.panel');

panelElements.forEach(panelElement => {
  panelElement.addEventListener('mouseenter', ({ target }) =>
    target.classList.add('panel-active')
  );
  panelElement.addEventListener('mouseleave', ({ target }) =>
    target.classList.remove('panel-active')
  );
});
