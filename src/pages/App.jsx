import { Suspense } from "react";
import Countries from "../components/Countries";

const fetchCountriesPromise = async (link) => {
  const res = await fetch(link);
  return res.json();
};

function App() {
  const countriesPromise = fetchCountriesPromise(
    "https://restcountries.com/v3.1/all"
  );
  return (
    <div className="grid place-content-center min-h-screen px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 container mx-auto">
      <Suspense fallback={<h2 className="text-4xl font-bold">Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </div>
  );
}

export default App;
