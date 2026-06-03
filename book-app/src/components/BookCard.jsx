function BookCard({ book, onSelect }) {
  return(
    <div onClick={() => onSelect(book)}>
      <img src={book.cover} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year} • {book.language}</p>
    </div>
  )
}

export default BookCard