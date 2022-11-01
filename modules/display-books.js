export default (booksDiv) => {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  if (books !== null) {
    for (let i = 0; i < books.length; i += 1) {
      booksDiv.innerHTML += `
        <p id="${i}-del" class="book-class">
            <span>"${books[i].title}" by ${books[i].author}</span>
            <button class="delete-button" id="${i}">Remove</button>
        </p>`;
    }
  }
};