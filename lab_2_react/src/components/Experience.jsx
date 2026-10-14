export default function Experience() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-emerald-500"></span>
        Досвід та проєкти
      </h2>
      <ul className="space-y-6 border-l-2 border-slate-700 ml-3">
        <li className="pl-6 relative">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          <strong className="text-slate-200 block mb-2 text-lg">Аудит кібербезпеки (Rozetka)</strong> 
          <span className="text-slate-400 font-light">Аналіз бізнес-процесів, оцінка ризиків та складання SoA за стандартом ISO/IEC 27001.</span>
        </li>
        <li className="pl-6 relative">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          <strong className="text-slate-200 block mb-2 text-lg">Розробка ПЗ на C# (.NET)</strong> 
          <span className="text-slate-400 font-light">Створення застосунку "Cyber Security Browser" (Windows Forms) з кастомним дизайном.</span>
        </li>
        <li className="pl-6 relative">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
          <strong className="text-slate-200 block mb-2 text-lg">Python-скриптинг</strong> 
          <span className="text-slate-400 font-light">Парсинг бінарних файлів, аналіз логів, обчислення SHA-256 хешів та ентропії Шеннона.</span>
        </li>
        <li className="pl-6 relative">
          <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600"></span>
          <strong className="text-slate-200 block mb-2 text-lg">Мережеві технології</strong> 
          <span className="text-slate-400 font-light">Проєктування топологій, налаштування VLAN, Trunk портів та L3 маршрутизації у Cisco Packet Tracer.</span>
        </li>
      </ul>
    </section>
  );
}