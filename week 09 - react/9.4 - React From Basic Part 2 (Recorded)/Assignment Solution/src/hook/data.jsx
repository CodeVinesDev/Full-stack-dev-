import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const response = await res.json();
        setData(response);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { loading, data, error };
};

export default useFetch;
