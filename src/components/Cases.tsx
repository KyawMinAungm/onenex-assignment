"use client";
import { MovieType } from "@/types/tmdbTypes";
import React, { useMemo, useRef } from "react";
import CaseCard from "@/components/CaseCard";
import CaseTabs from "./CaseTabs";

export default function Cases({ movies }: { movies: MovieType[] }) {
  // ၁။ Year တစ်ခုချင်းစီအတွက် Ref တွေကို သိမ်းထားဖို့ Object တစ်ခုဆောက်မယ်
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const years = useMemo(() => {
    if (!movies || movies.length === 0) return [];
    const allYears = movies
      .filter(movie => movie.release_date)
      .map((movie) => movie.release_date.split("-")[0]);
    return Array.from(new Set(allYears)).sort((a, b) => b.localeCompare(a));
  }, [movies]);

  // ၂။ Scroll လုပ်မယ့် Function
  const scrollToYear = (year: string) => {
    const section = sectionRefs.current[year];
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="relative">
      {/* Sticky Tabs: Scroll လုပ်နေတုန်းမှာ အပေါ်မှာ ကပ်နေအောင် */}
      <div className="sticky top-0 z-10 bg-background ">
        <CaseTabs 
          years={years} 
          activeTab={""} // Scroll ဖြစ်တဲ့အတွက် activeTab logic က ပိုရှုပ်နိုင်လို့ ခေတ္တချန်ထားပါ
          setActiveTab={scrollToYear} // နှိပ်လိုက်ရင် scroll လုပ်မယ်
        />
      </div>

      <div className="flex flex-col gap-32 mt-10">
        {years.map((year) => (
          <section 
            key={year} 
            ref={(el: HTMLDivElement | null) => { sectionRefs.current[year] = el; }} // Ref ကို သတ်မှတ်ခြင်း
            className="scroll-mt-32" // Scroll လုပ်ရင် Header နဲ့ မကပ်အောင် gap ပေးတာပါ
          >
            <h2 className="text-7xl mb-12 text-transparent text-outline-primary   ">
              {year}
            </h2>
            
            <div className="flex flex-col gap-16">
              {movies
                .filter(m => m.release_date.startsWith(year))
                .map((movie, index) => (
                  <CaseCard key={movie.id} isReverse={index % 2 === 1} movie={movie} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}