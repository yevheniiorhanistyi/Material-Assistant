import { v4 as uuidv4 } from 'uuid';
import { formatDate, clearInputField } from '../../utils/index.js';
import { SNACKBAR_VARIANTS } from '../../constants/constants.js';
import showSnackbar from '../snackbar/showSnackbar.js';
import loader from '../components/loader.js';
import errorMessage from '../components/errorMessage.js';

const COMMENTS_DATABASE_NAME = 'CommentsDatabase';
const COMMENTS_STORE_NAME = 'comments_store';

const openDatabase = () => new Promise((resolve, reject) => {
  const request = window.indexedDB.open(COMMENTS_DATABASE_NAME, 1);

  request.onsuccess = (event) => {
    resolve(event.target.result);
  };

  request.onerror = () => {
    reject(new Error('Błąd podczas otwierania bazy danych!'));
  };

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore(COMMENTS_STORE_NAME, { keyPath: 'id' });
  };
});

export const addCommentToDatabase = async () => {
  try {
    const textInput = document.querySelector('#comments-textarea');
    const newText = textInput.value.trim();
    if (newText !== '') {
      const newComment = {
        id: uuidv4(),
        time: Date.now(),
        text: newText,
      };
      const db = await openDatabase();
      const transaction = db.transaction(COMMENTS_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(COMMENTS_STORE_NAME);
      objectStore.add(newComment);
      await transaction.complete;
      clearInputField('#comments-textarea');
      generateComments();
      showSnackbar('Komentarz dodany pomyślnie!', SNACKBAR_VARIANTS.success);
    }
  } catch (error) {
    showSnackbar('Błąd podczas dodawania komentarza!', SNACKBAR_VARIANTS.error);
  }
};

const fetchComments = (db) => new Promise((resolve, reject) => {
  const transaction = db.transaction(COMMENTS_STORE_NAME, 'readonly');
  const objectStore = transaction.objectStore(COMMENTS_STORE_NAME);
  const request = objectStore.getAll();

  request.onsuccess = (event) => {
    resolve(event.target.result);
  };

  request.onerror = () => {
    reject(new Error('Błąd podczas pobierania danych z magazynu obiektów!'));
  };
});

const sortComments = (comments) => comments.sort((a, b) => new Date(a.time) - new Date(b.time));

const renderComments = (comments) => {
  const contentContainer = document.querySelector('.comments-content');
  if (comments.length === 0) {
    contentContainer.innerHTML = '<p class="info">Dodaj swój pierwszy komentarz, aby rozpocząć!</p>';
  } else {
    const commentsHTML = comments.map((comment) => `
    <div class="comment">
      <div class="comment__time">${formatDate(comment.time)}</div>
      <div class="comment__text">${comment.text}</div>
    </div>
  `).join('');
    contentContainer.innerHTML = commentsHTML;

    const lastComment = contentContainer.lastElementChild;
    lastComment.scrollIntoView();
  }
};

const generateComments = async () => {
  const contentContainer = document.querySelector('.comments-content');
  contentContainer.innerHTML = loader();

  try {
    const db = await openDatabase();
    const comments = await fetchComments(db);
    const sortedComments = sortComments(comments);
    db.close();
    setTimeout(() => {
      renderComments(sortedComments);
    }, 1000);
  } catch (error) {
    contentContainer.innerHTML = errorMessage();
    showSnackbar(error.message, SNACKBAR_VARIANTS.error);
  }
};

export default generateComments;
