import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="h-screen p-20 bg-white text-black mx-auto ">
      <div className="max-w- 3xl  px-6 py-10 flex flex-col items-start justify-center">
        <h2 className="text-3xl/loose font-sans mb-4">404</h2>
        <h2 className="text-4xl/relaxed  mb-4">Page Not Found</h2>
        <h2 className="text-3xl/relaxed text-gray-500">
          Sorry, we couldn&apos;t find the page.
        </h2>
        <Link href="/" className="flex font-sans items-center hover:text-white hover:bg-background border border-background text-background  p-2 mt-10 "><span className="text-xs font-bold">GO HOME</span> <ArrowRight/> </Link>
      </div>
    </section>
  );
}
