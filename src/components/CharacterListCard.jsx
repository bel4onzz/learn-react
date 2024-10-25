import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../actions/favoritesActions";

const CharacterListCard = ({ character }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);

  const handleFavorite = (action = "add") => {
    if (action === "remove") {
      dispatch(removeFavorite(character));
    }
    if (action === "add") {
      dispatch(addFavorite(character));
    }
  };

  const isFavorite = (characterId) => {
    return favorites.some((favorite) => favorite.id === characterId);
  };

  return (
    <>
      <div key={character.name} className="group relative">
        <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img
            alt={character.image}
            src={character.image}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <h3 className="mt-6 text-sm text-gray-500">
          <Link
            to={`/characters/${character.name}`}
            className="btn btn-primary"
          >
            {character.name}
          </Link>
        </h3>
        <p className="text-base font-semibold text-gray-900">
          {character.status}, {character.species}
        </p>

        <div className="sm:flex sm:flex-row sm:flex-wrap sm:justify-between">
          {isFavorite(character.id) ? (
            <h3
              className="mt-6 text-sm text-gray-500 cursor-pointer"
              onClick={() => handleFavorite("remove")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
            </h3>
          ) : (
            <h3
              className="mt-6 text-sm text-gray-500 cursor-pointer"
              onClick={() => handleFavorite("add")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
            </h3>
          )}
          <h3 className="mt-6 text-sm text-gray-500 overflow-hidden">
            <Link
              to={`/characters/${character.id}`}
              className="btn btn-primary"
            >
              More Details
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

CharacterListCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
  }).isRequired,
};

export default CharacterListCard;
