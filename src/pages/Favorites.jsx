import { useSelector } from "react-redux";
import CharacterListCard from "../components/CharacterListCard";
import PageContent from "../layouts/PageContent";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <PageContent title="Favorites Page">
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {favorites.map((char) => (
          <CharacterListCard key={char.id} character={char} />
        ))}
      </div>
    </PageContent>
  );
};
export default Favorites;
