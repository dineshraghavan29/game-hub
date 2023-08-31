export type Game = {
  id: number;
  name: string;
  background_image: string;
};

export type Games = {
  count: number;
  results: Game[];
};
