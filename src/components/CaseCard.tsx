import { MovieType } from "@/types/tmdbTypes";
import Image from "next/image";
import Link from "next/link";
const baseUrl = "https://image.tmdb.org/t/p/w500";

export default function Movie({
  movie,
  isReverse,
}: {
  movie: MovieType;
  isReverse: boolean;
}) {
  return (
    <Link
      href={`/cases/${movie.id}`}
      className={`lg:h-64 overflow-hidden flex ${isReverse ? "lg:flex-row-reverse" : "lg:flex-row"} flex-col gap-y-6  `}
    >
      <div
        className={` lg:w-[40%] ${isReverse ? "lg:ms-[10%]" : "lg:me-[10%]"} aspect-video view`}
      >
        <Image
          src={`${baseUrl}${movie.backdrop_path}`}
          alt={movie.title}
          width={400}
          height={300}
          className="w-full  h-auto object-cover view "
        />
      </div>
      <div className=" lg:w-[60%] text-black flex flex-col px-4 lg:px-0 justify-center gap-4">
        <h4 className=" lg:text-3xl leading-relaxed">
          {movie.overview.slice(0, 65)}...
        </h4>
        <p className="font-sharp mt-2">{movie.title}</p>
      </div>
    </Link>
  );
}
