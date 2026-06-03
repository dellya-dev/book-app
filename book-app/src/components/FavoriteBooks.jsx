import BookList from "./BookList"

function FavoriteBooks({ favorites }) {
  return (
    <>
      <h3>Favorite Books</h3>
      <BookList books={favorites} />
    </>
  )
}

export default FavoriteBooks