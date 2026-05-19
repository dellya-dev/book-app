import BookCard from '../components/BookCard'

function BookList({ books }) {
  return(
    books.map((book) => {
      return (
        <BookCard 
          key={book.id}
          book={book}
          />
      )
    })
  )
}

export default BookList