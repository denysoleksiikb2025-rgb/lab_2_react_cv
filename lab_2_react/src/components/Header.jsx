export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-2">Олексій Денис Олегович</h1>
      <p className="text-blue-200 italic mb-4">18 років</p>
      <address className="not-italic">
        <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm">
          <li>
            Email: <a href="mailto:denys.oleksiy@example.com" className="font-semibold hover:underline">denys.oleksiy@example.com</a>
          </li>
          <li>Місто: Львів</li>
        </ul>
      </address>
    </header>
  );
}