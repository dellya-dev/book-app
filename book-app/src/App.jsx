import './App.css'
import SearchBar from './components/SearchBar'
import RecommendedSection from './components/RecommendedSection'
import BookList from './components/BookList'
import { useState } from 'react'
import BookDetail from './components/BookDetail'

function App() {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [empty, setEmpty] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)


  async function fetchBooks() {
    setLoading(true)
    setEmpty(true)
    setError("")

    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
      const data = await response.json()
      setBooks(data.docs.map((book) => {
        return {
          id: book.key,
          cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
          title: book.title,
          author: book.author_name?.[0],
          year: book.first_publish_year,
          language: book.language?.[0]
        }
      }))
    }
    catch {
      setError("Something went wrong")
    }
    setQuery("")
    setLoading(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetchBooks()
  }

  function onSelectBook(book) {
    // console.log(book)
    // console.log("CLICKED")
    setSelectedBook(book)
    // console.log(selectedBook)
  }

  function handleClose() {
    setSelectedBook(null)
  }

//   useEffect(() => {
//   console.log(selectedBook)
// }, [selectedBook])

  const dummyBooks = [{
    id: 1,
    title: "Matahari",
    author: "Ndoro Putri",
    year: "2026",
    genre: "Fantasy"
  }, {
    id: 2,
    title: "Bulan",
    author: "Sasmita",
    year: "2026",
    genre: "Programming"
  }]

  console.log(dummyBooks)

  return (
    <>
      <h1>LIBRARY</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSubmit}
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {empty && books.length === 0 && !loading && !error && <p>Empty data</p>}

      <RecommendedSection 
        onSelect={onSelectBook}
      />
      <BookList
        books={books}
        onSelect={onSelectBook}
      />

      {selectedBook && (
      <BookDetail 
        book={selectedBook}
        onClose={handleClose}
      />
      )}
    </>
  )
}

export default App
