import addBook from './modules/add-book.js';
import previewBook from './modules/preview-book.js';
import removeBook from './modules/remove-book.js';
import displayBooks from './modules/display-books.js';
import { DateTime } from './modules/luxon.js';

const btn = document.getElementById('btn');
const booksDiv = document.getElementById('display-books');
const books = JSON.parse(localStorage.getItem('books') || '[]');
const DisplayBookListDiv = document.getElementById('all-books');
const DisplayContact = document.getElementById('contact-div');
const DisplayAddNew = document.getElementById('add-books');
const listLink = document.getElementById('list');
const addBookLink = document.getElementById('add-new');
const contactLink = document.getElementById('contact-link');
const time = DateTime.utc().toLocaleString(DateTime.DATETIME_FULL);

document.querySelector('.date').innerHTML = time;
displayBooks(booksDiv);

listLink.addEventListener('click', () => {
  DisplayBookListDiv.style.display = 'block';
  DisplayContact.style.display = 'none';
  DisplayAddNew.style.display = 'none';
});

addBookLink.addEventListener('click', () => {
  DisplayBookListDiv.style.display = 'none';
  DisplayContact.style.display = 'none';
  DisplayAddNew.style.display = 'block';
});

contactLink.addEventListener('click', () => {
  DisplayBookListDiv.style.display = 'none';
  DisplayContact.style.display = 'block';
  DisplayAddNew.style.display = 'none';
});

btn.addEventListener('click', () => {
  const bookTitle = document.getElementById('title').value;
  const bookAuthor = document.getElementById('author').value;
  if (addBook(bookTitle, bookAuthor) === true) {
    previewBook(bookTitle, bookAuthor, booksDiv, books.length - 1);
    window.history.go(0);
  }
});

const del = document.querySelectorAll('.delete-button');
del.forEach((element) => {
  element.addEventListener('click', () => {
    const id = parseInt(element.getAttribute('id'), 10);
    if (removeBook(id) === true) {
      const y = id.toString().concat('-del');
      document.getElementById(y).remove();
    }
  });
});
