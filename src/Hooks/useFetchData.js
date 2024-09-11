import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData(url) {
    try {
      setLoading(true);
      const res = await fetch(url);
      if (!res.ok) {
        const errorMessage = `Error: ${res.status} ${res.statusText}`;
        setError(new Error(errorMessage));
        return;
      }
      const data = await res.json();
      console.log(data);
      setData(data?.items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchData(url);
  }, [url]);
  return { data, loading, error };
}

export default useFetchData;
