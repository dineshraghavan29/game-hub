export type Platform = {
  id: number;
  slug: string;
  name: string;
};

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
};

export type Games = {
  count: number;
  results: Game[];
};
