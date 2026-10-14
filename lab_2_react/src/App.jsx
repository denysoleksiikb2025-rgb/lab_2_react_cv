import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 font-sans text-slate-300 selection:bg-emerald-500 selection:text-slate-900">
      <div className="max-w-4xl mx-auto bg-slate-800 shadow-[0_0_40px_rgba(16,185,129,0.1)] rounded-3xl overflow-hidden border border-slate-700">
        <Header />
        <main className="p-8 md:p-12 space-y-12">
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