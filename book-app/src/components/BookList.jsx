import BookCard from '../components/BookCard'
import './BookList.css'

function BookList({ books, onSelect, onToggleFavorite }) {
  return (
    <div className='book-grid'>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            book={book}
            onSelect={onSelect}
            onToggleFavorite={onToggleFavorite}
          />
        )
      })}
    </div>
  )
}

export default BookList