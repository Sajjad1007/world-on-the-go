import React, { useState } from "react";

const CountryCard = ({
  country,
  handleVisitedCountries,
  handleNotVisitedCountries,
}) => {
  const [visited, setVisited] = useState(false);

  const handleClick = () => {
    setVisited(!visited);
    !visited
      ? handleVisitedCountries(country)
      : handleNotVisitedCountries(country);
  };

  return (
    <div
      className={`border-2 border-none p-4 rounded-xl text-left ${
        visited && "bg-neutral-700"
      }`}
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="h-48 sm:h-44 md:h-52 lg:h-44 xl:h-52 2xl:h-60 w-full rounded-lg mb-3"
      />
      <div className="flex flex-col items-start">
        <h3 className="mb-1 h-12">
          Name&nbsp;&nbsp;:&nbsp;&nbsp;
          <span className="font-bold">{country.name.common}</span>
        </h3>
        <p className="mb-1">
          Independent&nbsp;&nbsp;:&nbsp;&nbsp;
          {country.independent ? "Yes" : "No"}
        </p>
        <p className="mb-3">
          Population&nbsp;&nbsp;:&nbsp;&nbsp;
          {country.population}
        </p>
      </div>
      <button
        onClick={handleClick}
        className={`${
          !visited
            ? "border-[rgba(255,255,255,0.87)] text-[rgba(255,255,255,0.87)] bg-[#242424]"
            : "border-neutral-400 text-neutral-600 bg-neutral-400"
        } w-28 h-10 rounded-lg hover:cursor-pointer border`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default CountryCard;
