export default function Skills() {
  return (
    <>
      <section className="p-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Technical Skills</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="bg-blue-50 p-3 rounded text-sm"><strong className="text-blue-700">Мови програмування:</strong> <br/>C#, Python.</li>
          <li className="bg-blue-50 p-3 rounded text-sm"><strong className="text-blue-700">Мережі:</strong> <br/>Cisco Packet Tracer, налаштування маршрутизаторів.</li>
          <li className="bg-blue-50 p-3 rounded text-sm"><strong className="text-blue-700">Інформаційна безпека:</strong> <br/>ISO/IEC 27001, криптографічні хеші, моніторинг цілісності.</li>
          <li className="bg-blue-50 p-3 rounded text-sm"><strong className="text-blue-700">Інструменти розробки:</strong> <br/>Git, Visual Studio, VS Code.</li>
          <li className="bg-blue-50 p-3 rounded text-sm"><strong className="text-blue-700">ОС:</strong> <br/>Windows 11.</li>
        </ul>
      </section>

      <section className="p-8 border-b border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Soft Skills</h2>
        <ul className="space-y-2 list-disc list-inside text-gray-700 marker:text-blue-500">
          <li><strong>Аналітичний підхід:</strong> Здатність розраховувати ризики та знаходити ефективні рішення.</li>
          <li><strong>Технічна комунікація:</strong> Вміння структурувати документацію та готувати презентації.</li>
          <li><strong>Adaptive Learning:</strong> Швидке опанування нових технологій та середовищ розробки.</li>
        </ul>
      </section>
    </>
  );
}