import React, { useState, useEffect } from "react";

const useDataFetching = (url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [results, setResults] = useState<Array<any>>([]);
  const [error, setError] = useState<any>("");

  useEffect(() => {
    async function fetchData() {
      try {
        // request data
        const data = await fetch(url);
        const json = await data.json();
        // success
        if (json) {
          setLoading(false);
          setResults(json);
        }
      } catch (error) {
        // fail
        setLoading(false);
        setError(error.message);
      }

      setLoading(false);
    }
    fetchData();
  }, [url]);

  return {
    loading,
    results,
    error
  };
};

export default useDataFetching;
