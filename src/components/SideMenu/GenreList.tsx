import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/img-url";
import { Genre } from "../../hooks/Genres.type";

type GenreListProps = {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
};

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => {
        const isSelected = genre.id === selectedGenre?.id;

        return (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                variant="link"
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                fontWeight={isSelected ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
