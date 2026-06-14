import { FaShieldAlt } from "react-icons/fa";

export default function ArmorIQCard() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">

      <div className="glass rounded-3xl p-10 text-center border border-cyan-500/30">

        <FaShieldAlt className="text-6xl text-cyan-400 mx-auto mb-6" />

        <h2 className="text-4xl font-bold mb-4">
          Secured by ArmorIQ
        </h2>

        <p className="text-gray-300 text-lg">
          Only app names are processed.
        </p>

        <p className="text-gray-300 text-lg">
          No personal data stored.
        </p>

        <p className="text-gray-300 text-lg">
          Privacy-first analysis architecture.
        </p>

      </div>

    </section>
  );
}