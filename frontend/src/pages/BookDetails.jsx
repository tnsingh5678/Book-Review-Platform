import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/books/${id}`);
        setBook(res.data.book);
      } catch (error) {
        console.log("Error fetching book:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/reviews/${id}`);
        setReviews(res.data?.data || []);
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    };

    fetchBook();
    fetchReviews();
  }, [id]);

  if (!book)
    return <p className="text-center mt-10 text-lg text-gray-600">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 border-b pb-2">
          {book.bookName}
        </h1>

        <div className="space-y-2 text-gray-700 text-lg">
          <p>
            <span className="font-semibold text-gray-900">Author:</span>{" "}
            {book.authorName}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Publisher:</span>{" "}
            {book.publisher}
          </p>
          <p>
            <span className="font-semibold text-gray-900">Edition:</span>{" "}
            {book.edition}
          </p>
        </div>

        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Leave a Review
          </h2>
          <ReviewForm bookId={book._id} />
        </div>

        <div className="mt-12 border-t pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Top 10 Recent Reviews
          </h2>
          {reviews.length === 0 ? (
            <p className="text-gray-500">No reviews yet.</p>
          ) : (
            <ul className="space-y-4">
              {reviews.map((review, index) =>
  review ? (
    <li key={index} className="bg-gray-100 p-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-blue-700">
          ⭐ {review.rating}/10
        </p>
        <p className="text-sm text-gray-500">
          {new Date(review.createdAt).toLocaleDateString()}
        </p>
      </div>
      <p className="mt-2 text-gray-700 italic">{review.review}</p>
      {review.userName && (
        <p className="mt-1 text-sm text-gray-600">– {review.userName}</p>
      )}
    </li>
  ) : null
)}

            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
