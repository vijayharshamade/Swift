import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import CommentsDashboard from "./components/CommentsDashboard";

function App() {
  return (
    <Router>
      <Header />
      <main className="p-4 bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<CommentsDashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
