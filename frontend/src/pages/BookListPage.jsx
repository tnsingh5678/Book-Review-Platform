import { useState, useEffect } from "react";
import { fetchBooks } from "../api/Bookapi";
import BookList from "../components/BookList";
import SearchBar from "../components/SearchBar";

const BookListPage = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const res = await fetchBooks(query ? `?search=${query}` : "");
    setBooks(res.data.books);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h2>Browse Books</h2>
      <SearchBar query={query} setQuery={setQuery} onSearch={loadBooks} />
      <BookList books={books} />
    </div>
  );
};

export default BookListPage;
