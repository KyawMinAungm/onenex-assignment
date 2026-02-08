const TMDB_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular`, {
		headers: {
			Authorization: `Bearer ${TMDB_KEY}`,
		},
	});

  if (!res.ok) {
    throw new Error("Failed to fetch movies from TMDB");
  }

  return res.json();
}
