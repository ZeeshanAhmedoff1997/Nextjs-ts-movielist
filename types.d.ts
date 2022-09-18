declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}
export interface MovieArray {
  movies: Movie[];
}
export interface Movie {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: string;
  title: string;
  video?: boolean;
  vote_average?: number;
  vote_count: number;
}
