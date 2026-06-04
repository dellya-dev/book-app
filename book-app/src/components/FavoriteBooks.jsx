import BookList from "./BookList"

function FavoriteBooks({ favorites, onSelect }) {
  return (
    <>
      <h3>Favorite Books</h3>
      <BookList 
        books={favorites}
        onSelect={onSelect} 

      />
    </>
  )
}

export default FavoriteBooks