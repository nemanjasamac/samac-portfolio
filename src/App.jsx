import Header from './components/Header';
import Hero from './sections/Hero';
import About from './sections/About';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
}
