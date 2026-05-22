import './App.css'
import SearchBar from './components/SearchBar'
import RecommendedSection from './components/RecommendedSection'
import BookList from './components/BookList'
import { useState } from 'react'

function App() {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchBooks() {
    setLoading(true)
    const response = await fetch ("fetch(`https://openlibrary.org/search.json?q=${query}`)")
    const data = await response.json()
    setBooks(data.docs.map((book) => {
      return { 
        title: book.title,
        author: book.author_name?.[0],
        year: book.first_publish_year,
        language: book.language?.[0]
      }
    }))
    setLoading(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetchBooks()
  }

 const DummyBooks = [{
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
 console.log(books)

 const recommendedBooks = DummyBooks.filter((book) => {
    return book.genre === "Fantasy"
 });

  return (
    <>
    <h1>LIBRARY</h1>
    <SearchBar onSearch = {handleSubmit}/>
    <RecommendedSection recommendedBooks={recommendedBooks}/>
    <BookList books={DummyBooks}/>
    </>
  )
}

export default App
