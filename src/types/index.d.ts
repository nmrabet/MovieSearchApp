export interface Movies {
  page: number;
  results: ListMovies[];
  total_pages: number;
  total_results: number;
}

interface ListMovies {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: "/vGTahyg0SX9cejcKj9P14NqXdgg.jpg";
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  adult: boolean;
  backdrop_path: null;
  genre_ids: Array;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: "/fl13KK3qG1ReCChHCU2qyai8oij.jpg";
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
