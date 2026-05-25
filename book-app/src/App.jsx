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

  if (loading) {
    return "Loading..."
  }

  async function fetchBooks() {
    setLoading(true)
    try {
      const response = await fetch(`https://openlibrary.org/search.json?q=${query}`)
      const data = await response.json()
      console.log(data)
      setBooks(data.docs.map((book) => {
        return {
          title: book.title,
          cover: book.cover_i,
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

  if (error) {
    return  "Something went wrong"
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

  const recommendedBooks = books.filter((book) => {
    return book.year === 2007
  });

  console.log(books)

  return (
    <>
      <h1>LIBRARY</h1>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSubmit} />
      <RecommendedSection recommendedBooks={recommendedBooks} />
      <BookList books={books} />
    </>
  )
}

export default App
