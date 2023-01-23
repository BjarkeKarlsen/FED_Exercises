export type BoardGame = {
  id: number;
  name: string;
  description: string;
  publicationYear: string;
  acquisitionDate: string;
  playersMin: number;
  playersMax: number;
  playTime: string;
  minimumAge: string;
  countAvailable: number;
  countInUse: number;
  rating: number;
  countRatings: number;
};

export type BoardGameDto = {
  name: string;
  description: string;
  publicationYear: string;
  acquisitionDate: string;
  playersMin: number;
  playersMax: number;
  playTime: string;
  minimumAge: string;
  countAvailable: number;
  countInUse: number;
  rating: number;
  countRatings: number;
};
export type BoardGames = {
  games: BoardGame[];
};
