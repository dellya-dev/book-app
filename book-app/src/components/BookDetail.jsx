import './BookDetail.css'

function BookDetail({ book, onClose, onToggleFavorite, favorites }) {

  function handleFavorites() {
    onToggleFavorite(book)
    onClose()
  }
  return (
    <>
      <div className='overplay' onClick={onClose}>
        <div 
          className='modal'
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={() => onClose()}>❌</button>
          <div>
            <img src={book.cover} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.year} • {book.language}</p>
            <button 
              onClick={handleFavorites}>
              {favorites? "👍" : "👎"}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetail