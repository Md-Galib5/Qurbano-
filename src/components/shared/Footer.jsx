import Image from "next/image";
import LOGO from "../../assets/logo.png";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative">
      <div className="h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Image
              src={LOGO}
              alt="logo"
              width={200}
              height={200}
              className="dark:brightness-200"
            />

            <p className="text-sm text-gray-700 dark:text-gray-400 max-w-xs">
              Qurbano is a modern livestock marketplace for Qurbani. 
              Explore verified animals, compare prices, and book easily from home.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Home
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <p className="text-gray-700">All Animals</p>
              <p className="text-gray-700">Gallery</p>
              <p className="text-gray-700">Profile</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Contact Info
            </h3>
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

              <p className="flex items-center gap-2 text-gray-700">
                <FaPhoneAlt /> +880 1234-567890
              </p>

              <p className="flex items-center gap-2 text-gray-700">
                <FaEnvelope /> support@qurbano.com
              </p>

              <p className="flex items-center gap-2 text-gray-700">
                <FaMapMarkerAlt /> Dhaka, Bangladesh
              </p>

            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:scale-105 transition">
                <FaFacebookF />
              </div>
              <div className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:scale-105 transition">
                <FaTwitter />
              </div>
              <div className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:scale-105 transition">
                <FaInstagram />
              </div>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400">
              Buy your Qurbani today.
            </p>

            <Link
              href="/register"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p className="text-gray-700">
            © {new Date().getFullYear()} Qurbano. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <p className="text-gray-700">Privacy</p>
            <p className="text-gray-700">Terms</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;