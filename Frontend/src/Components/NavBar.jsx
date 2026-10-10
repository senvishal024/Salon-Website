import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navLinkStyle = ({ isActive }) =>
    `font-medium text-sm uppercase tracking-wide transition duration-300 ${
      isActive
        ? "text-[#E5B86A]"
        : "text-[#F1F4EF] hover:text-[#E5B86A]"
    }`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full text-shadow-md transition-all duration-300 ${
        scrolled
          ? "bg-[#092328] py-2 shadow-lg"
          : "bg-transparent py-3"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-widest text-[#F1F4EF] sm:text-3xl"
        >
          NGS
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 lg:flex xl:gap-10 font-sans">
          
          <NavLink className={navLinkStyle} to="/">
            Home
          </NavLink>

          <NavLink className={navLinkStyle} to="/services-page">
            Services
          </NavLink>

          <NavLink className={navLinkStyle} to="/about-page">
            About Us
          </NavLink>

          <NavLink className={navLinkStyle} to="/gallery-page">
            Gallery
          </NavLink>

          <NavLink className={navLinkStyle} to="/contact-page">
            Contact
          </NavLink>

          {/* Book Now */}
          <Link
            to="/booking-page"
            className="rounded-full bg-[#2A835F] px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
          >
            Book Now
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-md p-1 text-[#F1F4EF] transition hover:text-[#E5B86A] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-[#B8C7C1]/20 bg-[#092328] lg:hidden">
          
          <div className="flex flex-col gap-5 px-6 py-6">

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkStyle}
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkStyle}
              to="/services-page"
            >
              Services
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkStyle}
              to="/about-page"
            >
              About Us
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkStyle}
              to="/gallery-page"
            >
              Gallery
            </NavLink>

            <NavLink
              onClick={() => setOpen(false)}
              className={navLinkStyle}
              to="/contact-page"
            >
              Contact
            </NavLink>

            <Link
              onClick={() => setOpen(false)}
              to="/booking-page"
              className="mt-2 rounded-full bg-[#2A835F] px-5 py-3 text-center text-sm font-semibold uppercase tracking-wide text-[#F1F4EF] transition duration-300 hover:bg-[#E5B86A] hover:text-[#092328]"
            >
              Book Appointment
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;