import { useEffect } from "react";
import { fetchBooks } from "../api/Bookapi";
import { useAppContext } from "../context/AppContext";
import BookCard from "../components/BookCard";

const Home = () => {
  const { books, setBooks, loading, setLoading, setError } = useAppContext();

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const res = await fetchBooks();
        setBooks(res.data.books);
      } catch (err) {
        setError("Failed to load books.");
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-10">
          📚 Featured Books
        </h1>

        {loading ? (
          <p className="text-center text-lg text-gray-500">Loading books...</p>
        ) : books.length === 0 ? (
          <p className="text-center text-lg text-gray-600">No books found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map(book => (
              <BookCard key={book._id} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
