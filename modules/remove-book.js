export const removeBook = (id) => {
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  books.splice(id, 1);
  localStorage.setItem('books', JSON.stringify(books));
  return true;
}