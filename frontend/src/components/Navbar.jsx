import { FaShieldAlt, FaGithub } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <div className="flex items-center gap-2">
          <FaShieldAlt className="text-cyan-400 text-2xl" />
          <h1 className="font-bold text-xl">
            ConsentLens
          </h1>
        </div>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Compare</a>
          <a href="#">About</a>
        </div>

        <button className="bg-primary px-4 py-2 rounded-lg flex items-center gap-2">
          <FaGithub />
          GitHub
        </button>

      </div>
    </nav>
  );
}