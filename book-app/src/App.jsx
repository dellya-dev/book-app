import './App.css'
import SearchBar from './components/SearchBar'
import RecommendedSection from './components/RecommendedSection'
import BookList from './components/BookList'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [empty, setEmpty] = useState(false)


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
          title: book.title,
          cover: `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`,
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
      {empty && books.length === 0 && !loading && !error && <p>Empty data</p> }
      <RecommendedSection />
      <BookList books={books} />
    </>
  )
}

export default App
