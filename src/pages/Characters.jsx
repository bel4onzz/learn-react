import { json, useLoaderData } from "react-router-dom";

import PageContent from "../layouts/PageContent";
import CharacterListCard from "../components/CharacterListCard";
import SearchCharacter from "../components/SearchCharacter";

const Characters = () => {
  const characters = useLoaderData();
  return (
    <>
      <PageContent title="Characters Page">
        <SearchCharacter />
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {characters.results &&
            characters.results.map((character) => (
              <CharacterListCard key={character.id} character={character} />
            ))}
        </div>
      </PageContent>
    </>
  );
};

export default Characters;

export const loader = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  if (!response.ok) {
    throw json({ message: "Could not fetch countries." }, { status: 500 });
  } else {
    const data = await response.json();
    console.log("CHARACTERS RESPONSE :::> ", data);
    return data;
  }
};
