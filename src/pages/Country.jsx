import { json, useLoaderData } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import PageContent from "../components/layouts/PageContent";

function Country() {
  const country = useLoaderData();
  return (
    <PageContent title="Country Page">
      <CountryCard country={country} isEditing={true} />
    </PageContent>
  );
}

export default Country;

export const loader = async ({ params }) => {
  const countryName = params.name;
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}`
  );

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected country." },
      { status: 500 }
    );
  } else {
    const [data] = await response.json();
    return data;
  }
};
