export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

export type Genres = {
  count: number;
  results: Genre[];
};
