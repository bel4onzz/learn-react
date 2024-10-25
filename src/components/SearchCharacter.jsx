import { useDispatch } from "react-redux";
import { searchCharacter } from "../actions/searchActions";

const SearchCharacter = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(searchCharacter(e.target.value));
  };

  return (
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
            onChange={handleSearch}
            id="searchCharacter"
            name="searchCharacter"
            type="text"
            placeholder="Search Charactes"
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>
  );
};
export default SearchCharacter;
