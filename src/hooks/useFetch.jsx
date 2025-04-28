import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url, searchParams) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchParams != null) {
      setLoading(true);
      axios
        .get(url, {
          params: searchParams,
        })
        .then(function (response) {
          setData(response.data.response.results);
        })
        .catch(function (error) {
          throw new Error
        })
        .finally(function () {
          setLoading(false);
        });
    }
  }, [searchParams]);
  return { data, error, loading };
}
