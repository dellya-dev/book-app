function BookCard({ book }) {
  return(
    <div>
      <h3>{book.title}</h3>
      <img src={book.cover} />
      <p>{book.author}</p>
      <p>{book.year} • {book.language}</p>
    </div>
  )
}

export default BookCard