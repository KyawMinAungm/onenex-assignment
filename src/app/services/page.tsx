import AnimatedCounter from "@/components/AnimatedCounter";
import Button from "@/components/Button";
import LatestCard from "@/components/LatestCard";
import ScrollReveal from "@/components/ScrollReveal";
import { StickyScrollReveal } from "@/components/StickyScrollReveal";
import { services, text1, text2, text3 } from "@/constants/service";
import { getMovies } from "@/lib/tmdb";
import { MovieType } from "@/types/tmdbTypes";
import Image from "next/image";


export default async function page() {
  const data = await getMovies();
  const movies :MovieType[] = data.results.slice(0,3)

  return (
    <div className="bg-background ">
      <section className="container flex min-h-screen  items-center justify-center ">
        <div className="absolute w-full top-[14%]  ">
          <Image
            className=" w-[42%] select-none mx-auto "
            src="/onenex_icon_stack.png"
            alt="icon stack"
            width={1000}
            height={800}
          />
        </div>
        <div className="text-[80px] leading-none z-10 text-center ">
          <p className="text-white ">BOOST YOUR</p>
          <p className="">GROTH</p>
        </div>
      </section>
      <section className=" bg-foreground ">
        <div className=" flex flex-col ">
          <StickyScrollReveal
            containerClass="w-full"
            textColour="text-foreground"
            text={text1}
            className="flex items-center justify-center bg-linear-to-b from-black via-black mx-auto px-6 lg:px-20"
          >
            <h3 className="text-white font-sharp w-full text-start text-xl mb-6">
              WHAT DO WE DO?
            </h3>
          </StickyScrollReveal>
        </div>
      </section>
      <section className="container-full min-h-screen bg-linear-to-b form from-foreground to-white"></section>
      <section className="container-full bg-white">
        <StickyScrollReveal
          textColour="text-foreground"
          className="pt-10"
          containerClass="container"
          text={text2}
        />
        <StickyScrollReveal
          textColour="text-[#7038FF]"
          className="pt-[-50%]"
          containerClass="container"
          text={text3}
        />
      </section>
      <section className="container-full bg-linear-to-b pb-6 from-white  to-[#7038FF]">
        <div className="flex flex-col md:flex-row text-lg gap-x-20 gap-6 mb-30">
          <div className="w-full md:w-[50%]">
            <h6 className="text-black text-2xl lg:text-4xl leading-relaxed">
              WE ARE WITH YOU FOR THE LONG HAUL
            </h6>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-start justify-center">
            <h6 className="text-black font-sharp mb-6">
              As you scale, launch your products, and go into new markets, we
              continue to support your business and get people excited all over
              again.
            </h6>
            <div className="text-2xl lg:text-4xl text-[#7038FF] mb-3">
              2.3 Years
            </div>
            <h6 className="text-black font-sharp">
              Industry average length of client - onenex relationship
            </h6>
          </div>
        </div>

        <div className="flex flex-col md:flex-row text-lg gap-x-20 gap-6 mb-30">
          <div className="w-full md:w-[50%]">
            <h6 className="text-black text-2xl lg:text-4xl leading-relaxed">
              WE KNOW WHAT IT TAKES TO LAUNCH
            </h6>
          </div>
          <div className="w-full md:w-[50%] flex flex-col items-start justify-center">
            <h6 className="text-black font-sharp mb-6">
              We have launched hundreds of products across categories.
            </h6>
            <h6 className="text-black  font-sharp mb-6">
              We have seen it all, done it all.
            </h6>

            <div className="flex gap-4 justify-between w-full">
              <div className="text-2xl lg:text-4xl text-[#7038FF] mb-3">
                <AnimatedCounter targetValue={30} />
                <h6 className="text-black text-lg font-sharp">
                  Industries Sector
                </h6>
              </div>

              <div className="text-2xl lg:text-4xl text-[#7038FF] mb-3">
                <AnimatedCounter targetValue={150} />+
                <h6 className="text-black text-lg font-sharp">
                  Industries Sector
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-6 mb-30 ">
          <h6 className="text-white text-2xl leading-relaxed lg:text-4xl text-center">
            WE’RE AN EXTENSION OF YOUR TEAM. ONE GOAL, ONE TEAM AND ONE BIG
            PRODUCT.
          </h6>
          <div className=" flex flex-col items-center ">
            <div className="text-foreground text-2xl lg:text-4xl">
              <AnimatedCounter targetValue={70} />+
            </div>
            <h6 className="text-white font-sharp text-lg mt-2">Team members</h6>
          </div>
        </div>
      </section>
      <section className="container-full pb-10  bg-[#7038FF] overflow-hidden to-primary">
        {services.map((service, index) => (
          <ScrollReveal
            key={index}
            title={service.title}
            description={service.description}
            detail={service.detail}
          />
        ))}
      </section>
      <section className="container-full bg-linear-to-b from-[#7038FF] to-black py-20">
        <h4 className="text-outline-white text-transparent text-4xl md:text-6xl text-center pb-10">
          THE LATEST
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20 my-10">
          {movies.map(movie => <LatestCard key={movie.id} movie ={movie}/> )}
          
        </div>
        <div className="text-center md:w-1/2 mx-auto flex flex-col justify-center items-center">
          <p className="text-white font-sharp md:text-xl mb-6">
            SEEKING PARTNERS IN CHANGE?
          </p>
          <p className="text-4xl md:text-5xl leading-[1.2] mb-10">
            Let’s talk about your project.
          </p>
          <Button bg="transparent" fg="white" label="GET IN TOUCH" />
        </div>
      </section>
    </div>
  );
}
