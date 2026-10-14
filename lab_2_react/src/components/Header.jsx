export default function Header() {
  return (
    <header className="bg-slate-950 p-10 flex flex-col items-center border-b border-slate-700 relative overflow-hidden">
      {/* Декоративний ефект світіння на фоні */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none"></div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 text-center relative z-10">
        Олексій Денис Олегович
      </h1>
      <p className="text-emerald-400/80 font-mono tracking-widest text-sm mb-6 uppercase">Кібербезпека & Розробка</p>
      <address className="not-italic z-10">
        <ul className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <li className="flex items-center gap-2">
            <span className="text-emerald-500">▹</span>
            <a href="mailto:denys.oleksii.kb.2025@lpnu.ua" className="hover:text-emerald-400 transition-colors duration-300">denys.oleksii.kb.2025@lpnu.ua</a>
          </li>
          <li className="flex items-center gap-2">
            <span className="text-emerald-500">▹</span>
            Львів, 18 років
          </li>
        </ul>
      </address>
    </header>
  );
}