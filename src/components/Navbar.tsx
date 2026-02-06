"use client";
import { useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import Link from "next/link";
import { ArrowUpLeft } from "lucide-react";

import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const navLinks = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/services" },
  { name: "CASES", href: "/cases" },
  { name: "CONTACT US", href: "/contact-us" },
];

const socials = [
  { icon: FaFacebook, href: "https://facebook.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
  { icon: FaLinkedin, href: "https://linkedin.com" },
  { icon: FaYoutube, href: "https://youtube.com" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const logoColor = isOpen ? "text-primary" : "text-foreground";
  const toggleColor = isOpen ? "bg-primary" : "bg-foreground";

  // Scroll position ကို စောင့်ကြည့်ပြီး Navbar ကို ဖျောက်/ပြ လုပ်ခြင်း
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true); // အောက်ကို scroll ဆင်းရင် ဖျောက်မယ်
    } else {
      setHidden(false); // အပေါ်ကို scroll ပြန်တက်ရင် ပြမယ်
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md  px-6 lg:px-20 py-4 lg:py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className={`text-2xl z-[101] font-semibold font-orbitron tracking-tighter ${logoColor}`}
        >
          ONENEX
        </Link>

        {/* Links */}

        <div className="hidden lg:flex items-center gap-8 text-xs  font-sans text-foreground">
          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground transition"
            >
              {link.name}
            </Link>
          ))}
        </div>
        {/* Mobile Toggle Button */}
        <div className="lg:hidden  font-sans flex items-center justify-center gap-4">
          <Link href="/contact-us" className="">
            GET IN TOUCH
          </Link>
          <button
            className={`z-[101]  focus:outline-none`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-1.5">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-0.5 ${toggleColor}`}
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block w-6 h-0.5 ${toggleColor}`}
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className={`block w-6 h-0.5 ${toggleColor}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed t inset-0 h-screen bg-[#DBFF66] z-[100] flex flex-col items-start justify-start pt-24 px-4 gap-8 lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl  text-primary hover:text-blue-500"
              >
                <div className="flex items-center gap-4">
                  <ArrowUpLeft className="w-7 h-7" />
                  {link.name}
                </div>
              </Link>
            ))}

            <div className="mx-auto w-[95%] py-10 absolute bottom-0">
              <div className="flex gap-4  flex-row items-center justify-center mx-auto mb-6">
                {socials.map((social) => (
                  <a
                    className="w-8 h-8 bg-primary rounded-full flex items-center justify-center"
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-4 h-4  text-[#DBFF66] hover:text-blue-500 transition" />
                  </a>
                ))}
              </div>
              <div className="text-center w-full ">
                <h4 className=" text-black font-sans text-center mx-auto">
                  © 2024 ONENEX. ALL RIGHTS RESERVED
                </h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
