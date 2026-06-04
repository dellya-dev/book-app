import './BookCard.css'

function BookCard({ book, onSelect }) {
  return (
    <>
      <div className='book-card'>
        <div onClick={() => onSelect(book)}>
          <img className="book-cover" src={book.cover} />
          <p className='book-title'>{book.title}</p>
          <p className='book-author'>{book.author}</p>
          <p className='book-year'>{book.year} • {book.language}</p>
        </div>
      </div>
    </>
  )
}

export default BookCard