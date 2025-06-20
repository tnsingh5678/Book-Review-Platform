import { useContext, useState } from "react";
import { submitReview } from "../api/Bookapi";
import { UserContext } from "../context/UserContext";
import axios from "axios"
import { toast } from "react-toastify";

const ReviewForm = ({ bookId }) => {
  const [msg, setMsg] = useState("");
  const [rating, setRating] = useState(5);
  const [error, setError] = useState("");
  const user = useContext(UserContext);

  const handleSubmit = async () => {
    if (rating < 0 || rating > 10) {
      setError("Rating must be between 0 and 10.");
      return;
    }

    try {
      console.log(user.user.userId)
      const res = await axios.post('http://localhost:4000/reviews/',{
        userId : user.user.userId,
        bookId,
        rating,
        msg
      })
      toast.success("Review added successfully")
      alert("Review submitted!");
      setMsg("");
      setRating(5);
      setError("");
    } catch (err) {
      setError("Failed to submit review. Try again later.");
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-4">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Review</h3>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Rating (0-10)</label>
        <input
          type="number"
          min={0}
          max={10}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Message</label>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          rows={4}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Write your review here..."
        ></textarea>
      </div>

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300"
      >
        Submit Review
      </button>
    </div>
  );
};

export default ReviewForm;
