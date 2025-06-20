import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import BookListPage from './pages/BookListPage';
import Profile from './pages/Profile';
import { AppProvider } from './context/AppContext';
import Login from './pages/LoginPage'
import Signup from './pages/SignupPage'
import { AuthProvider } from './context/AuthContext';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <Router>
      <AppProvider>
      <AuthProvider>
      <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/books" element={<BookListPage />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      </UserProvider>
      </AuthProvider>
      </AppProvider>
    </Router>
  );
}
export default App;
