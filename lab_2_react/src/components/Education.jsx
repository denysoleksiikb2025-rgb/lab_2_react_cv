export default function Education() {
  return (
    <section className="p-8 border-b border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 uppercase tracking-wider">Освіта</h2>
      <article className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold text-blue-600">НУ «Львівська політехніка»</h3>
        <p className="text-gray-700 mt-1">Спеціальність: Кібербезпека та захист інформації</p>
        <p className="text-gray-500 text-sm mt-2">Студент (<time dateTime="2025">2025</time> – дотепер)</p>
      </article>
    </section>
  );
}