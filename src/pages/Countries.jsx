import { useState } from "react";
import { json, useLoaderData } from "react-router-dom";

import CountryCard from "../components/CountryCard";
import PageContent from "../components/layouts/PageContent";

const Countries = () => {
  const countries = useLoaderData();
  const [search, setSearch] = useState("");

  const filterCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PageContent title="Countries Page">
      <input
        className="form-control my-4"
        type="text"
        placeholder="Search countries"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="d-flex flex-row flex-wrap">
        {filterCountries &&
          filterCountries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
      </div>
    </PageContent>
  );
};

export default Countries;

export const loader = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (!response.ok) {
    throw json({ message: "Could not fetch countries." }, { status: 500 });
  } else {
    const data = await response.json();
    return data;
  }
};
