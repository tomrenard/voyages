export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <form className="w-full max-w-md flex flex-col gap-4">
        <input type="text" placeholder="Nom" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea placeholder="Message" className="p-2 border rounded h-32"></textarea>
        <button type="submit" className="p-2 bg-black text-white rounded hover:bg-neutral-800">Envoyer</button>
      </form>
    </div>
  );
}

