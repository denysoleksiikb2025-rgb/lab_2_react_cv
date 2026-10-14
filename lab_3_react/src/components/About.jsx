export default function About() {
  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-100 mb-6 flex items-center gap-3">
        <span className="w-8 h-[2px] bg-emerald-500"></span>
        Про мене
      </h2>
      <p className="text-slate-400 leading-relaxed text-justify text-lg font-light">
        Студент спеціальності <span className="text-emerald-400 font-medium">"Кібербезпека та захист інформації"</span>. Маю практичний досвід у проведенні аудитів інформаційної безпеки, розробці програмного забезпечення та налаштуванні мережевих інфраструктур. Прагну розвиватися у сфері кіберзахисту, вдосконалювати навички програмування та працювати над складними технічними проєктами.
      </p>
    </section>
  );
}