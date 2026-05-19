import BookList from "./BookList"

function RecommendedSection({ recommendedBooks }) {
  return(
    <BookList books={recommendedBooks} />
  )
}

export default RecommendedSection