export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-10 mt-20">

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-6">

        <div>
          <h3 className="font-bold text-xl">
            ConsentLens
          </h3>

          <p className="text-gray-400">
            Built for privacy awareness
          </p>
        </div>

        <div className="flex gap-6">

          <a href="#">
            GitHub
          </a>

          <a href="#">
            Privacy
          </a>

          <a href="#">
            Contact
          </a>

        </div>

        <div>
          © {new Date().getFullYear()}
        </div>

      </div>

    </footer>
  );
}