export interface MovieType {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string; 
  poster_path: string;   
  genre_ids: number[];   
  release_date: string; 
  vote_average: number;
}