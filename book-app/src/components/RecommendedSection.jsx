import { useEffect, useState } from "react"
import BookList from "./BookList"


function RecommendedSection() {
  const [recommendedBooks, setRecommendedBooks] = useState([])

  useEffect(() => {
    async function fetchRecommendedBooks() {
      const keyWords = "fantasy"
      const response = await fetch(`https://openlibrary.org/search.json?q=${keyWords}`)
      const data = await response.json()
      setRecommendedBooks(data.docs
        .sort(() => Math.random() - 0.5)
        .slice(0, 8)
        .map((book) => {
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
    fetchRecommendedBooks()
  }, [])

  return (
    <>
      <h3>Recommended Books</h3>
      <BookList books={recommendedBooks} />
    </>
  )
 
}

export default RecommendedSection