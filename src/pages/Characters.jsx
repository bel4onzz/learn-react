import { useState } from "react";
import { json, useLoaderData } from "react-router-dom";

import PageContent from "../layouts/PageContent";
import CaracterComponenet from "../components/CharacterComponenet";

const Characters = () => {
  const characters = useLoaderData();
  console.log(characters);
  const [search, setSearch] = useState("");

  const filterCharacters = characters.results.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <PageContent title="Characters Page">
        <div className="sm:col-span-4">
          <label
            htmlFor="searchCharacter"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Search Character
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                id="searchCharacter"
                name="searchCharacter"
                type="text"
                placeholder="Search Charactes"
                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filterCharacters &&
            filterCharacters.map((character) => (
              <CaracterComponenet key={character.id} character={character} />
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
    console.log("CHARACTER RESPONSE :::> ", data);
    return data;
  }
};
