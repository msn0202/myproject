import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex items-center gap-2 text-white">

        <li>
          <Link
            to="/"
            className="px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className="px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          >
            Contact
          </Link>
        </li>

        <li>
          <Link
            to="/sign-up"
            className="px-4 py-2 rounded-full bg-yellow-400 text-gray-900 font-bold hover:bg-yellow-300 hover:scale-105 transition duration-300"
          >
            Sign-Up
          </Link>
        </li>

        <li>
          <Link
            to="/sign-in"
            className="px-4 py-2 rounded-full border border-yellow-300 font-semibold hover:bg-yellow-400 hover:text-gray-900 transition duration-300"
          >
            Sign-In
          </Link>
        </li>

      </ul>
    </nav>
  );
}