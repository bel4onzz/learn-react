import { useSelector } from 'react-redux';
import CaracterComponenet from '../components/CharacterComponenet';

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div className="favorites-list">
      {favorites.map((char) => (
        <CaracterComponenet key={char.id} character={char} />
      ))}
    </div>
  );
};
export default Favorites;
