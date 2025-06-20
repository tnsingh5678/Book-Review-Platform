import BookCard from "./BookCard";

const BookList = ({ books }) => {
  if (!books.length) return <p>No books found.</p>;

  return (
    <div className="book-list">
      {books.map(book => <BookCard key={book._id} book={book} />)}
    </div>
  );
};

export default BookList;
