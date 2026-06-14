import { useState } from "react";

export default function SearchBox({ onAnalyze, loading }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) {
      alert("Please enter at least one app");
      return;
    }

    const apps = input
      .split(",")
      .map((app) => app.trim())
      .filter(Boolean);

    onAnalyze(apps);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4">
      <div className="glass rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Analyze App Permissions
        </h2>

        <div className="flex flex-col md:flex-row gap-4">

          <input
            type="text"
            placeholder="Instagram, WhatsApp, Truecaller"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent border border-gray-700 rounded-xl px-5 py-4 outline-none focus:border-cyan-400"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-primary hover:bg-indigo-700 transition px-8 py-4 rounded-xl font-semibold"
          >
            {loading ? "Analyzing..." : "Analyze"}
          </button>

        </div>

      </div>
    </section>
  );
}