export default function Hero() {
  return (
    <section className="text-center py-28">

      <div className="absolute blur-3xl bg-purple-600 w-72 h-72 rounded-full opacity-20"></div>

      <h1 className="text-6xl font-bold gradient-text">
        ConsentLens
      </h1>

      <p className="text-2xl mt-5">
        Know What Your Apps Really Know About You
      </p>

      <p className="text-gray-400 mt-4">
        You clicked Allow. We show the consequences.
      </p>

      <button className="mt-8 bg-primary px-8 py-4 rounded-xl shadow-glow">
        Analyze Apps
      </button>

    </section>
  );
}