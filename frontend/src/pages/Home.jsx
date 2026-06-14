import { useState } from "react";

import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import ResultCard from "../components/ResultCard";
import ComparisonTable from "../components/ComparisonTable";
import ArmorIQCard from "../components/ArmorIQCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorState from "../components/ErrorState";

import { analyzeApps } from "../services/api";

export default function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (apps) => {
    try {
      setLoading(true);
      setError("");

      const data = await analyzeApps(apps);

      setResults(data.results || []);
    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
          "Unable to connect to backend server."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Hero />

      <SearchBox
        onAnalyze={handleAnalyze}
        loading={loading}
      />

      {loading && <LoadingSpinner />}

      {error && (
        <ErrorState message={error} />
      )}

      {!loading && results.length > 0 && (
        <>
          <section className="max-w-7xl mx-auto px-4 py-16">

            <h2 className="text-4xl font-bold text-center mb-12">
              Analysis Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {results.map((result) => (
                <ResultCard
                  key={result.appName}
                  result={result}
                />
              ))}

            </div>

          </section>

          <ComparisonTable results={results} />
        </>
      )}

      <ArmorIQCard />
    </>
  );
}