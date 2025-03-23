import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => <h1>Home</h1>;
const AdminPage = () => <h1>Admin</h1>;

const App = () => {
  return (
    <Router>
      <nav>
        <Link className="text-2xl" to="/">Home</Link>
        <Link to="/admin">Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
};

export default App;