import { Comic } from '../models/Comics';

interface ComicsListProps {
  comics: Comic[];
}

const ComicsList = ({ comics }: ComicsListProps) => {
  comics = comics.filter(
    (c) => c.characters?.items && c.characters?.items?.length > 0
  );
  return (
    <>
      {comics.map((comic) => (
        <option value={`${comic.id}`} key={comic.id}>
          {comic.title}
        </option>
      ))}
    </>
  );
};

export default ComicsList;
