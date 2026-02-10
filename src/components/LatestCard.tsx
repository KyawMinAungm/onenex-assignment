import { MovieType } from "@/types/tmdbTypes";
import { ArrowUpLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const baseUrl = "https://image.tmdb.org/t/p/w500";
export default function LatestCard({ movie }: { movie: MovieType }) {
  return (
    <Link className="bg-white view font-sharp" href={`/cases/${movie.id}`}>
      <div className="">
        <Image
        className="w-full"
          alt="img"
          src={`${baseUrl}${movie.backdrop_path}`}
          width={300}
          height={200}
        />
      </div>
      <div className="p-4">
        <h6 className="uppercase flex text-lg gap-4 mb-4">
          <ArrowUpLeft className="text-black" /> {movie.title}
        </h6>
        <p className="text-sm text-black">
          {movie.overview.slice(0,50)}
        </p>
      </div>
    </Link>
  );
}
