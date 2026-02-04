
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-sans border-t border-gray-800 pt-20 pb-10 px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo Section */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">ONENEX <span className="">RECREATION</span></h2>
            <p className="text-white max-w-sm mb-6">
              Leading digital agency in Myanmar, providing innovative technology solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-white">
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/cases" className="hover:text-white transition">Cases</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Office</h3>
            <p className="text-white">Yangon, Myanmar</p>
            <p className="text-white">contact@example.com</p>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:row justify-between items-center text-white text-sm">
          <p>© 2024 Kyaw Min Aung - Developed for Nura Next Assignment.</p>
        </div>
      </div>
    </footer>
  );
}