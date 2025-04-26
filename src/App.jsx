import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home'; // ✅ new
import AboutPage from './pages/About';

export default function App() {
  return (
    <Router>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-[#0b0c10] to-[#030712]" />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </Router>
  );
}
