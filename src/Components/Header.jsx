import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg border-b border-purple-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-300">
            <img
              className="h-8 w-auto object-cover"
              src="./Images/GenZAI_(1)-transformed (1).png"
              alt="GenZ AI Logo"
            />
            <span className="hidden sm:inline text-white text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              GenZ AI
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
            >
              Gallery
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
            >
              About
            </Link>
          </nav>

          {/* Create Button */}
          <Link
            to="/create-post"
            className="px-6 py-2.5 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-sm sm:text-base"
          >
            Create
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
