export default function Education() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-emerald-500"></span>
        Освіта
      </h2>
      <article className="group bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 transition-all duration-300">
        <h3 className="text-xl font-semibold text-slate-200 group-hover:text-emerald-400 transition-colors">НУ «Львівська політехніка»</h3>
        <p className="text-slate-400 mt-2">Спеціальність: Кібербезпека та захист інформації</p>
        <p className="text-emerald-500/80 font-mono text-sm mt-4">Студент (2025 – дотепер)</p>
      </article>
    </section>
  );
}