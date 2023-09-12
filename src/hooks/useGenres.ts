import genres from "../data/genres";

const useGenres = () => ({ data: genres, error: null, isLoading: false });

export default useGenres;
