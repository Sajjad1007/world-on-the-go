import React, { use, useState } from "react";
import CountryCard from "./CountryCard";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
  countries.sort((country1, country2) => {
    return country1.name.common.localeCompare(country2.name.common, undefined, {
      sensitivity: "accent",
    });
  });

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleNotVisitedCountries = (country) => {
    visitedCountries.splice(visitedCountries.indexOf(country), 1);
    const newVisitedCountries = [...visitedCountries];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div className="text-center max-w-96 sm:max-w-none mx-auto">
      <div className="sticky top-0 z-10 bg-[#242424] py-5">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Total Countries : {countries.length - visitedCountries.length}
        </h1>
        <h2 className="text-2xl sm:text-3xl font-bold">
          Countries Visited : {visitedCountries.length}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {countries.map((country) => (
          <CountryCard
            key={country.cca2}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleNotVisitedCountries={handleNotVisitedCountries}
          ></CountryCard>
        ))}
      </div>
    </div>
  );
};

export default Countries;
