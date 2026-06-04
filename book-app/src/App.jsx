import './App.css'
import SearchBar from './components/SearchBar'
import RecommendedSection from './components/RecommendedSection'
import BookList from './components/BookList'
import { useEffect, useState } from 'react'
import BookDetail from './components/BookDetail'
import FavoriteBooks from './components/FavoriteBooks'

function App() {
  const [query, setQuery] = useState("")
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [empty, setEmpty] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites")
    return saved? JSON.parse(saved) : []
  })


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
    setSelectedBook(book)
  }

  function handleClose() {
    setSelectedBook(null)
  }

    function handleToggleFavorite(book) {
   
      const isFavorite = favorites.some((favorite) => favorite.id === book.id)
      if (isFavorite) {
       setFavorites(favorites.filter((favorite) => favorite.id !== book.id)) 
      } else {
        setFavorites([...favorites, book]) 
      }
    }

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites)
    )
    }, [favorites])

  // const dummyBooks = [{
  //   id: 1,
  //   title: "Matahari",
  //   author: "Ndoro Putri",
  //   year: "2026",
  //   genre: "Fantasy"
  // }, {
  //   id: 2,
  //   title: "Bulan",
  //   author: "Sasmita",
  //   year: "2026",
  //   genre: "Programming"
  // }]

  return (
    <>
      <h1>ILIB</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSubmit}
      />

      {loading && 
        <p 
          className='loading'>
          Loading...
        </p>}
      {error && 
        <p 
          className='error'>
          {error}
        </p>}
      {empty && books.length === 0 && !loading && !error && 
        <p
          className='data-empty'>
          Empty data
        </p>}

      <BookList
        books={books}
        onSelect={onSelectBook}
        onToggleFavorite={handleToggleFavorite}
      />

      <RecommendedSection 
        onSelect={onSelectBook}
        onToggleFavorite={handleToggleFavorite}
      />

      <FavoriteBooks 
        favorites={favorites}
         onSelect={onSelectBook}
      />

      {selectedBook && (
      <BookDetail 
        book={selectedBook}
        onClose={handleClose}
        onToggleFavorite={handleToggleFavorite}
      />
      )}
    </>
  )
}

export default App
