function BookCard({ book }) {
  return(
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.year} • {book.genre}</p>
    </div>
  )
}

export default BookCard