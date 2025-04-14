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
      className={`border-2 border-none p-4 md:p-5 rounded-xl text-left ${
        visited && "bg-neutral-700"
      }`}
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
        className="h-48 sm:h-44 md:h-52 lg:h-44 xl:h-52 2xl:h-64 w-full rounded-lg mb-3"
      />
      <div className="flex flex-col items-start">
        <h3 className="my-2 h-12 text-xl">
          Name&nbsp;&nbsp;:&nbsp;&nbsp;
          <span className="font-bold">{country.name.common}</span>
        </h3>
        <p className="mb-2 text-xl">
          Independent&nbsp;&nbsp;:&nbsp;&nbsp;
          {country.independent ? "Yes" : "No"}
        </p>
        <p className="mb-5 text-xl">
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
        } w-36 h-12 rounded-lg hover:cursor-pointer hover:opacity-80 border text-xl`}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default CountryCard;
