import { useNavigate, useParams } from 'react-router-dom';
import { useFetchCharacter } from '../utils/useFetchCharacter';
import { useEffect } from 'react';

type CharacterModalContentProps = {
  id: number | undefined;
};

const CharacterModalContent = ({ id }: CharacterModalContentProps) => {
  console.log(id);
  const character = useFetchCharacter(id);
  console.log(JSON.stringify(character));
  return (
    <>
      <h2 className="font-bold text-lg text-center pb-3 text-primary">
        {character?.name}
      </h2>
      <div className="card lg:card-side ">
        <figure className="max-w-sm w-full">
          <img
            src={
              character?.thumbnail?.path + '.' + character?.thumbnail?.extension
            }
            alt={`Character ${
              character?.thumbnail?.path?.includes('image_not_available')
                ? 'not available image'
                : character?.name
            }`}
          />
        </figure>
        <div className="card-body px-8 py-2">
          <h2 className="card-title">{character?.name}</h2>
          {character?.description !== '' && <p>{character?.description}</p>}
        </div>
      </div>
    </>
  );
};

export default CharacterModalContent;
