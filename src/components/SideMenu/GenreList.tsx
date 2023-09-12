import {
  Button,
  HStack,
  Heading,
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
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
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
                  objectFit={"cover"}
                />
                <Button
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                  fontSize="lg"
                  fontWeight={isSelected ? "bold" : "normal"}
                  whiteSpace={"normal"}
                  textAlign={"left"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
