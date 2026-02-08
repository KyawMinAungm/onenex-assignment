"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Button from "./Button";

const links = [
  { name: "Cases", href: "/cases" },
  { name: "Contact Us", href: "/contact-us" },
  { name: "Services", href: "/services" },
];

const services = [
  "UI/UX Development",
  "Web Development",
  "Android Development",
  "iOS Development",
];
const socials = [
  { icon: FaFacebook, href: "https://facebook.com" },
  { icon: FaInstagram, href: "https://instagram.com" },
  { icon: FaLinkedin, href: "https://linkedin.com" },
  { icon: FaYoutube, href: "https://youtube.com" },
];

export default function Footer() {
  const pathname = usePathname();
  const isCasesPage = pathname === "/cases";
  const isContactPage = pathname === "/contact-us";
  return (
    <footer
      className={`w-full min-h-screen flex items-center ${isCasesPage ? "bg-foreground text-white" : "bg-white text-primary"}  md:sticky mx-auto bottom-0 -z-10 pt-20 pb-10 px-6 lg:px-20`}
    >
      <div className={`w-full mx-auto`}>
        {!isContactPage && (
          <div className="lg:flex flex-row  items-start  mb-12">
            <h2 className="lg:text-[50px]/snug text-3xl  mb-6">
              WE ARE YOUR PATNER FOR INNOVATION & GROWTH
            </h2>
            <Link href="/contact-us" className="mt-4">
              <Button
                label="GET IN TOUCH"
                bg={isCasesPage ? "foreground" : "white"}
                fg={isCasesPage ? "white" : "primary"}
                className=""
              />
            </Link>
          </div>
        )}
        <div className="font-sharp grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          <div className="flex flex-col gap-4">
            <h6>WE ONENEX</h6>
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm cursor-pointer ${isCasesPage ? "text-white" : "text-black"}`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h6>WE OFFER</h6>
            {services.map((service) => (
              <p
                key={service}
                className={`text-sm ${isCasesPage ? "text-white" : "text-black"}`}
              >
                {service}
              </p>
            ))}
          </div>
          <div className="flex mt-8 md:mt-0 flex-col items-center justify-center gap-4 w-full col-span-3  md:col-span-1 md:items-start md:justify-start">
            <h6 className="hidden md:block">FOLLOW US</h6>
            <div className=" flex items-center gap-3">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  className={`w-8 h-8  rounded-full flex items-center justify-center cursor-pointer  ${isCasesPage ? "bg-white text-foreground" : "bg-primary text-white"}`}
                  href={social.href}
                  target="_blank"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div
          className={`md:border-t ${isCasesPage ? "border-white" : "border-primary"} md:py-8  flex flex-col md:row justify-between items-center  text-xs`}
        >
          <p>© 2026 Kyaw Min Aung - Developed for Nura Next Assignment.</p>
        </div>
      </div>
    </footer>
  );
}
