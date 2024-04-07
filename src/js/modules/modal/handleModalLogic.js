const handleModalLogic = () => {
  const body = document.querySelector('body');
  const backdrop = document.querySelector('.backdrop');
  const modal = document.querySelector('.modal');
  const modalTitle = modal.querySelector('.modal__title');
  const modalText = modal.querySelector('.modal__text');
  const buttonOpen = modal.querySelector('#modal-button-confirm');
  const buttonClose = modal.querySelector('#modal-button-cancel');

  const handleCloseOnce = () => {
    buttonClose.removeEventListener('click', handleCloseOnce);
    handleClose();
  };

  const handleConfirmOnce = (callback) => {
    buttonOpen.removeEventListener('click', handleConfirmOnce);
    buttonClose.removeEventListener('click', handleCloseOnce);
    handleClose();
    callback();
  };

  const handleOpen = (title, text, callback) => {
    modalTitle.innerHTML = title;
    modalText.innerHTML = text;

    backdrop.classList.add('backdrop-show');
    modal.classList.add('modal-open');
    body.classList.add('overflow-hidden');

    buttonClose.addEventListener('click', handleCloseOnce);
    buttonOpen.addEventListener('click', () => handleConfirmOnce(callback));
    backdrop.addEventListener('click', handleCloseOnce);
  };

  const handleClose = () => {
    backdrop.classList.remove('backdrop-show');
    modal.classList.remove('modal-open');
    body.classList.remove('overflow-hidden');
  };

  return { handleOpen, handleClose };
};

export default handleModalLogic;
