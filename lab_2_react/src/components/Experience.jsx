export default function Experience() {
  return (
    <section className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Досвід та проєкти</h2>
      <ul className="space-y-4">
        <li className="pl-4 border-l-4 border-blue-500 bg-gray-50 p-3 rounded-r-lg">
          <strong className="text-gray-900 block mb-1">Аудит кібербезпеки (Rozetka):</strong> 
          <span className="text-gray-600">Аналіз бізнес-процесів, оцінка ризиків та складання SoA за стандартом ISO/IEC 27001.</span>
        </li>
        <li className="pl-4 border-l-4 border-blue-500 bg-gray-50 p-3 rounded-r-lg">
          <strong className="text-gray-900 block mb-1">Розробка ПЗ на C# (.NET):</strong> 
          <span className="text-gray-600">Створення застосунку "Cyber Security Browser" (Windows Forms) з кастомним дизайном.</span>
        </li>
        <li className="pl-4 border-l-4 border-blue-500 bg-gray-50 p-3 rounded-r-lg">
          <strong className="text-gray-900 block mb-1">Python-скриптинг:</strong> 
          <span className="text-gray-600">Парсинг бінарних файлів, аналіз логів, обчислення SHA-256 хешів та ентропії Шеннона.</span>
        </li>
        <li className="pl-4 border-l-4 border-blue-500 bg-gray-50 p-3 rounded-r-lg">
          <strong className="text-gray-900 block mb-1">Мережеві технології:</strong> 
          <span className="text-gray-600">Проєктування топологій, налаштування VLAN, Trunk портів та L3 маршрутизації у Cisco Packet Tracer.</span>
        </li>
      </ul>
    </section>
  );
}