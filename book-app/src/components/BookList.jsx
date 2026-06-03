import BookCard from '../components/BookCard'

function BookList({ books, onSelect, onToggleFavorite }) {
  return (
    <>
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
    </>
  )
}

export default BookList