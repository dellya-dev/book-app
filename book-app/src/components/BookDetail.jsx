import './BookDetail.css'

function BookDetail({ book, onClose }) {
  console.log("BOOK DETAIL RENDER")
  console.log(book)
  return (
    <>
      <div className='popup-backdrop'>
        <div className='popup-card'>
          <button onClick={() => onClose()}>❌</button>
          <div>
            <img src={book.cover} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.year} • {book.language}</p>
            <button>❤️</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookDetail