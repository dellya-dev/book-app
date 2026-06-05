import BookList from "./BookList"

function FavoriteBooks({ favorites, onSelect }) {
  return (
    <>
      <h3 style={{textAlign: "left", marginLeft: "10px", marginTop:"30px", marginBottom:"-50px"}}>Favorite Books ({favorites.length}) </h3>
      <BookList 
        books={favorites}
        onSelect={onSelect} 

      />
    </>
  )
}

export default FavoriteBooks