function BookCard({ book }) {
  return(
    <div>
      <h3>{book.title}</h3>
      <p>{book.cover}</p>
      <p>{book.author}</p>
      <p>{book.year} • {book.language}</p>
    </div>
  )
}

export default BookCard