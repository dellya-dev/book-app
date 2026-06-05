import './BookDetail.css'

function BookDetail({ book, onClose, onToggleFavorite }) {

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
          <button 
            className='close-button'
            onClick={() => onClose()}>
            ❌
            </button>
          <div className='detail-book'>
            <img src={book.cover} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.year} • {book.language}</p>
            <button
              className='favorite-button' 
              onClick={handleFavorites}>
              ❤️
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetail