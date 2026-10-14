export default function Skills() {
  return (
    <>
      <section>
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-emerald-500"></span>
          Технічні навички
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <strong className="text-emerald-400 block mb-1">Мови програмування</strong> 
            <span className="text-slate-400 text-sm">C#, Python.</span>
          </li>
          <li className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <strong className="text-emerald-400 block mb-1">Мережі</strong> 
            <span className="text-slate-400 text-sm">Cisco Packet Tracer, налаштування маршрутизаторів.</span>
          </li>
          <li className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <strong className="text-emerald-400 block mb-1">Інформаційна безпека</strong> 
            <span className="text-slate-400 text-sm">ISO/IEC 27001, криптографічні хеші, моніторинг.</span>
          </li>
          <li className="bg-slate-900/50 p-4 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors">
            <strong className="text-emerald-400 block mb-1">Інструменти розробки</strong> 
            <span className="text-slate-400 text-sm">Git, Visual Studio, VS Code.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
          <span className="w-8 h-[2px] bg-emerald-500"></span>
          Soft Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          <span className="px-4 py-2 bg-slate-900 rounded-full border border-slate-700 text-slate-300 text-sm">Аналітичний підхід</span>
          <span className="px-4 py-2 bg-slate-900 rounded-full border border-slate-700 text-slate-300 text-sm">Технічна комунікація</span>
          <span className="px-4 py-2 bg-slate-900 rounded-full border border-slate-700 text-slate-300 text-sm text-emerald-400 border-emerald-500/30">Adaptive Learning</span>
        </div>
      </section>
    </>
  );
}