import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-[#12544F] text-[#F1F4EF]">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-20">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-[#E5B86A]">
            NEW GENERATION FAMILY SALON
          </h2>

          <p className="mt-5 max-w-xs text-sm leading-7 text-[#F1F4EF] font-sans">
            Where beauty meets confidence. Experience premium beauty,
            hair and grooming services crafted just for you.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="https://www.instagram.com/newgeneration_family_saloon?stkn=MXRybWk2Z2VwNzNqcg=="
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#73777B]/30 text-sm transition hover:border-[#E5B86A] hover:text-[#E5B86A]"
            >
                <FaInstagram className="text-xl" />
            </a>

            <a
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#73777B]/30 text-sm transition hover:border-[#E5B86A] hover:text-[#E5B86A]"
            >
              <FaFacebookF className="text-xl" />
            </a>

            <a
              href="https://wa.me/916367000133?text=Hello%2C%20I%20want%20to%20book%20an%20appointment%20at%20New%20Generation%20Salon."
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#73777B]/30 text-sm transition hover:border-[#E5B86A] hover:text-[#E5B86A]"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-[#F1F4EF] font-sans">
            <li>
              <a href="#" className="transition hover:text-[#E5B86A]">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#E5B86A]">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#E5B86A]">
                Services
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#E5B86A]">
                Gallery
              </a>
            </li>

            <li>
              <a href="#" className="transition hover:text-[#E5B86A]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Our Services
          </h3>

          <ul className="space-y-3 text-sm text-[#F1F4EF] font-sans">
            <li>Hair Styling</li>
            <li>Hair Coloring</li>
            <li>Facial & Skin Care</li>
            <li>Manicure & Pedicure</li>
            <li>Bridal Makeup</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Get In Touch
          </h3>

          <ul className="space-y-4 text-sm text-[#F1F4EF] font-sans">
            <li>
              📍 123 Beauty Street, Udaipur, Rajasthan
            </li>

            <li>
              📞 +91 98765 43210
            </li>

            <li>
              ✉️ hello@ngsalon.com
            </li>

            <li>
              🕒 Mon - Sun: 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#73777B]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-[#B8C7C1] md:flex-row lg:px-20">

          <p>
            © 2026 New Generation Salon. All rights reserved.
          </p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/vishall.sen?stkn=MWMybGc5ZWJpcDY3eA==">Developed & Design by ByteMotion</a>
            </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E5B86A]">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#E5B86A]">
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
export default Footer;