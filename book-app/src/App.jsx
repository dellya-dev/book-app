import './App.css'
import SearchBar from './components/SearchBar'
import RecommendedSection from './components/RecommendedSection'
import BookList from './components/BookList'

function App() {
 const books = [{
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

 const recommendedBooks = books.filter((book) => {
    return book.genre === "Fantasy"
 });

  return (
    <>
    <h1>LIBRARY</h1>
    <SearchBar />
    <RecommendedSection recommendedBooks={recommendedBooks}/>
    <BookList books={books}/>
    </>
  )
}

export default App
