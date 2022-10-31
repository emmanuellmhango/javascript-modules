export default (title, author, div, arrLength) => {
  div.innerHTML += `
    <p id="${arrLength}-del" class="book-class">
      <span>"${title}" by ${author}</span>
      <button class="delete-button" id="${arrLength}">Remove</button>
    </p>`;
}
