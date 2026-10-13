import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        <Header />
        <main>
          <About />
          <Education />
          <Experience />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;