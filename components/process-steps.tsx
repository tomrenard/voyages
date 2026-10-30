export const processSteps = [
  {
    step: "01",
    title: "Rencontre & Échange",
    text: "Nous discutons de vos envies, de votre rythme et de votre budget.",
  },
  {
    step: "02",
    title: "Création",
    text: "Nous élaborons une première proposition détaillée et sur-mesure.",
  },
  {
    step: "03",
    title: "Ajustements",
    text: "Nous affinons ensemble le projet jusqu'à ce qu'il soit parfait.",
  },
  {
    step: "04",
    title: "Voyage",
    text: "Partez l'esprit tranquille avec notre carnet de voyage et notre assistance.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((s) => (
        <li key={s.step} className="border-t border-gray-300 pt-6 pb-10">
          <span className="text-primary font-serif text-4xl">{s.step}</span>
          <h3 className="mt-4 font-serif text-2xl text-gray-900">{s.title}</h3>
          <p className="mt-2 text-gray-600">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
