import { useState } from "react";
import AppLogo from "../assets/logo.svg";
import ArrowRightIcon from "../assets/arrow_right_icon.svg";
import { Menu, X } from "lucide-react"; // built-in icon set

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-indigo-400 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="h-20 px-6 sm:px-10 flex justify-between items-center">
        {/* Logo */}
        <a href="/">
          <img src={AppLogo} alt="App Logo" className="cursor-pointer" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-[45vw] justify-between items-center">
          <a href="/#hero" className="text-white font-outfit text-xl hover:opacity-80 transition">
            Home
          </a>
          <a href="/#features" className="text-white font-outfit text-xl hover:opacity-80 transition">
            Features
          </a>
          <a href="/#researchers" className="text-white font-outfit text-xl hover:opacity-80 transition">
            Researchers
          </a>
          <a href="/#contact">
            <div className="bg-brand-turqoise-200 rounded-xl cursor-pointer hover:brightness-110 transition">
              <div className="flex items-center py-2 px-5">
                <p className="text-white font-outfit text-xl mr-2">Get in Touch</p>
                <img src={ArrowRightIcon} alt="arrow" />
              </div>
            </div>
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden bg-brand-indigo-400 transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start space-y-5 py-5 ml-8">
          <a
            href="/#hero"
            className="text-white font-outfit text-lg hover:opacity-80 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/#features"
            className="text-white font-outfit text-lg hover:opacity-80 transition"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="/#researchers"
            className="text-white font-outfit text-lg hover:opacity-80 transition"
            onClick={() => setIsOpen(false)}
          >
            Researchers
          </a>
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
          >
            <div className="bg-brand-turqoise-200 rounded-xl cursor-pointer hover:brightness-110 transition">
              <div className="flex items-center py-2 px-5">
                <p className="text-white font-outfit text-lg mr-2">
                  Get in Touch
                </p>
                <img src={ArrowRightIcon} alt="arrow" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
