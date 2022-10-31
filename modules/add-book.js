export default (bookTitle, bookAuthor) => {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  const book = {
    title: bookTitle,
    author: bookAuthor,
  };

  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
  return true;
}
