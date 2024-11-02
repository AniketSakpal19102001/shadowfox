import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between items-center mx-5 h-[10%] sm:mx-16">
      <div className="nav-item font-bold text-3xl md:text-4xl name-logo">
        Aniket
      </div>
      <ul className="flex justify-end items-center py-6 gap-5">
        <li className="nav-item style-none sm:block hidden cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="nav-item style-none sm:block hidden cursor-pointer">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="nav-item style-none sm:block hidden cursor-pointer">
          <Link to="education" smooth={true} duration={500}>
            Education
          </Link>
        </li>
        <li className="nav-item style-none sm:block hidden cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        {isOpen ? (
          <li
            className=" style-none block sm:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <X />
          </li>
        ) : (
          <li
            className="fade style-none block sm:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </li>
        )}
      </ul>
      {isOpen && (
        <div className="bg-gray-500 rounded-sm pl-4 py-4 pr-14 fixed top-16 right-0 z-50">
          <li className="py-1 style-none block sm:hidden cursor-pointer">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(!isOpen)}
            >
              Projects
            </Link>
          </li>
          <li className="py-1 style-none block sm:hidden cursor-pointer">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(!isOpen)}
            >
              Skills
            </Link>
          </li>
          <li className="py-1 style-none block sm:hidden cursor-pointer">
            <Link
              to="education"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(!isOpen)}
            >
              Education
            </Link>
          </li>
          <li className="py-1 style-none block sm:hidden cursor-pointer">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
