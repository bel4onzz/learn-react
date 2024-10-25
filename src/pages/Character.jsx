import { json, useLoaderData } from "react-router-dom";
import PageContent from "../layouts/PageContent";

const Character = () => {
  const character = useLoaderData();
  return (
    <>
      <PageContent title="Character Page">
        <div className="grid grid-cols-3 gap-4 p-6 items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <div className="col-span-1">
            <img
              className="object-cover mx-auto rounded-t-lg h-96 md:h-auto md:w-lg md:rounded-none md:rounded-s-lg"
              alt={character.image}
              src={character.image}
            />
          </div>
          <div className="col-span-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {character.name}, {character.origin.name}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {character.species}, {character.status}, {character.gender}
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Episodes:
            </p>
            <div className="flex flex-row flex-wrap justify-between">
              {character.episode.map((item, index) => (
                <p
                  key={index}
                  className="mb-3 text-xs text-gray-700 dark:text-gray-400"
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Character;

export const loader = async ({ params }) => {
  const characterId = params.id;
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );

  if (!response.ok) {
    throw json({ message: "Could not fetch countries." }, { status: 500 });
  } else {
    const data = await response.json();
    console.log("CHARACTER RESPONSE :::> ", data);
    return data;
  }
};
