import Button from "@/components/Button";
import Link from "next/link";
import InfiniteScroll from "@/components/InfiniteScroll";
import HeroHighlight from "@/components/HeroHighlight";
import { getMovies } from "@/lib/tmdb";
import { MovieType } from "@/types/tmdbTypes";

import Cases from "@/components/Cases";

export default async function CasesPage() {
  const data = await getMovies();
  const movies: MovieType[] = data.results.slice(0, 12);
  // const [activeTab, setActiveTab] = useState("")
  return (
    <main className="pt-20 pb-10 bg-background mx-auto">
      {/* Page Header */}
      <section className="pb-20 ">
        <HeroHighlight>
          <p className="text-4xl container-full md:text-6xl leading-normal text-[#838383] mt-4 ">
            We are in the business of building capabilities for our clients,
          </p>

          <div className="text-5xl md:text-7xl leading-normal  mt-4 ">
            <InfiniteScroll speed={5}>
              <span className="">&nbsp; CASE &nbsp;</span>
              <span className="text-transparent text-outline">
                STUDIES &nbsp;
              </span>
              <span className="w-75 h-0.5 bg-foreground" />
            </InfiniteScroll>
          </div>

          <p className=" mx-auto container-full text-4xl md:text-6xl text-end leading-normal mb-20 text-[#838383] mt-4 ">
            from startup to industry leaders
          </p>
        </HeroHighlight>
      </section>

      <section className="container-full">
        <Cases movies={movies} />
      </section>

      <section className="mt-20 text-center min-h-screen  mx-auto container-full  flex flex-col justify-center">
        <p className="text-black font-sharp text-[20px]">
          SEEKING PARTNERS IN CHANGE?
        </p>

        <p className="text-4xl max-w-xl mx-auto md:text-5xl leading-normal text-foreground my-8 ">
          Let&apos;s talk about your project.
        </p>
        <Link href="/contact-us">
          <Button label="GET IN TOUCH" className="mx-auto" />
        </Link>
      </section>
    </main>
  );
}
