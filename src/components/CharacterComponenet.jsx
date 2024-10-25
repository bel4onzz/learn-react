// import PropTypes from "prop-types";

import { useDispatch } from "react-redux";
import { addFavorite } from "../actions/favoritesActions";

const CaracterComponenet = ({ character }) => {
  const dispatch = useDispatch();

  const handleFavorite = () => {
    dispatch(addFavorite(character));
  };

  return (
    <>
      <div key={character.name} className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img
            alt={character.image}
            src={character.image}
            className="h-full w-sm object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <a href={character.image}>
            <span className="absolute inset-0" />
            {character.name}
          </a>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {character.status}, {character.species}
        </p>

        <h3 className="mt-6 text-sm text-gray-500">
          <button onClick={handleFavorite}>
            <span className="absolute inset-0" />
            Add to favorites
          </button>
        </h3>
      </div>
    </>
  );
};

export default CaracterComponenet;
