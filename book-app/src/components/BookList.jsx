import BookCard from '../components/BookCard'

function BookList({ books, onSelect }) {
  return (
    <>
      {books.map((book) => {
        return (
          <BookCard
            key={book.id}
            book={book}
            onSelect={onSelect}
          />
        )
      })}
    </>
  )
}

export default BookList