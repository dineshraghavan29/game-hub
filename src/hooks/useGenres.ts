import { Genre } from "./Genres.type";
import useData from "./useData";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
