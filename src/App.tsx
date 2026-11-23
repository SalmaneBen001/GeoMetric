export default function App() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-sidebar p-6 text-white">
        <h1 className="text-xl font-bold">
          Geo<span className="text-brand">Metric</span>
        </h1>
      </aside>
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold">Tailwind works</h2>
        <button className="mt-4 rounded-lg bg-brand px-4 py-2 text-white hover:bg-brand-dark">
          Test button
        </button>
      </main>
    </div>
  );
}
