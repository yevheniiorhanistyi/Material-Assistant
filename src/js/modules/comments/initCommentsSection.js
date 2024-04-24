import { createElement, clearInputField } from '../../utils/index.js';
import generateComments, { addCommentToDatabase } from './generateComments.js';

const initCommentsSection = () => {
  const rootEl = document.querySelector('#root');
  const commentsSectionEl = createElement('section', 'comments');
  const commentBtnEl = createElement('button', 'icon-button comments-button');
  const actionsGroupEl = createElement('div', 'actions-group');
  const closeBtnEl = createElement('button', 'actions-group__button');
  const sendBtnEl = createElement('button', 'actions-group__button');
  const overlay = document.querySelector('.comments__overlay') || createElement('div', 'comments__overlay');

  closeBtnEl.setAttribute('id', 'comments-button-cancel');
  sendBtnEl.setAttribute('id', 'comments-button-confirm');

  closeBtnEl.innerHTML = 'Anuluj';
  sendBtnEl.innerHTML = 'Ok';

  const openComments = () => {
    generateComments();
    commentsSectionEl.classList.add('open-comments');
    closeBtnEl.addEventListener('click', closeComments);
    sendBtnEl.addEventListener('click', addCommentToDatabase);
    overlay.addEventListener('click', closeComments);
    rootEl.append(overlay);
  };

  const closeComments = () => {
    commentsSectionEl.classList.remove('open-comments');
    clearInputField('#comments-textarea');
    overlay.remove();
    overlay.removeEventListener('click', closeComments);
    closeBtnEl.removeEventListener('click', closeComments);
    sendBtnEl.removeEventListener('click', addCommentToDatabase);
  };

  const toggleComments = () => {
    const isOpen = commentsSectionEl.classList.contains('open-comments');
    if (isOpen) {
      closeComments();
    } else {
      openComments();
    }
  };

  commentBtnEl.innerHTML = `
    <svg class="icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ChatIcon" tabindex="-1"
        title="Chat">
      <path
        d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z">
      </path>
    </svg>
  `;

  commentsSectionEl.innerHTML = `
      <h3 class="comments-title">Uwagi</h3>
      <div class="comments-content">
        <div class="comment">
          <div class="comment__time">09.04.2024 10:10</div>
          <div class="commnet__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam iste tempore et illum, aspernatur ipsa
            id quidem fuga consequatur vitae, perspiciatis officiis reprehenderit distinctio recusandae eveniet
            obcaecati iusto labore voluptatem.
          </div>
        </div>
        <div class="comment">
          <div class="comment__time">09.04.2024 10:10</div>
          <div class="commnet__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam iste tempore et illum, aspernatur ipsa
            id quidem fuga consequatur vitae, perspiciatis officiis reprehenderit distinctio recusandae eveniet
            obcaecati iusto labore voluptatem.
          </div>
        </div>
        <div class="comment">
          <div class="comment__time">09.04.2024 10:10</div>
          <div class="commnet__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam iste tempore et illum, aspernatur ipsa
            id quidem fuga consequatur vitae, perspiciatis officiis reprehenderit distinctio recusandae eveniet
            obcaecati iusto labore voluptatem.
          </div>
        </div>
        <div class="comment">
          <div class="comment__time">09.04.2024 10:10</div>
          <div class="commnet__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam iste tempore et illum, aspernatur ipsa
            id quidem fuga consequatur vitae, perspiciatis officiis reprehenderit distinctio recusandae eveniet
            obcaecati iusto labore voluptatem.
          </div>
        </div>
      </div>
      <textarea class="comments__textarea" id="comments-textarea" cols="20" rows="5"
        placeholder="Napisz komentarz..."></textarea>
      `;

  commentBtnEl.addEventListener('click', toggleComments);

  actionsGroupEl.append(closeBtnEl, sendBtnEl);
  commentsSectionEl.append(actionsGroupEl);

  rootEl.append(commentsSectionEl, commentBtnEl);
};

export default initCommentsSection;
