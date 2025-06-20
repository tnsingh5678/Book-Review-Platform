import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3>{book.bookName}</h3>
      <p>Author: {book.authorName}</p>
      <Link to={`/book/${book._id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;
