export interface searchInfo {
  page: number;
  results: MovieModel[];
  total_pages: number;
  total_results: number;
}

export interface MovieModel {
adult: boolean;
backdrop_path: string;
id: number;
original_language: string;
original_title: string;
overview: string;
popularity: number;
poster_path: string;
release_date: string;
title: string;
video: boolean;
vote_average: number;
vote_count: number;
genre_ids: genre[];
}

export interface genre {
  genreid: number;
}
