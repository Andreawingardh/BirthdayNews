import { useEffect, useState } from "react";

export default function useFetch(url, params) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      axios
        .get(url, {
          params: {
            params,
          },
        })
        .then(function (response) {
          console.log(response);
          console.log(response.results.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  }, [url]);
  return { data, error, loading };
}
