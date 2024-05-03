const handleDrawer = () => {
  const burgerButtonEl = document.querySelector('.burger-button');
  const drawerEl = document.querySelector('.drawer');
  const backdrop = document.querySelector('.backdrop');

  const handleOpen = () => {
    drawerEl.classList.add('drawer-open');
    backdrop.classList.add('backdrop-show');
    backdrop.addEventListener('click', handleClose);
  };

  const handleClose = () => {
    if (drawerEl.classList.contains('drawer-open')) {
      drawerEl.classList.remove('drawer-open');
      backdrop.classList.remove('backdrop-show');
      backdrop.removeEventListener('click', handleClose);
    }
  };

  window.addEventListener('resize', handleClose);
  burgerButtonEl.addEventListener('click', handleOpen);
};

export default handleDrawer;
