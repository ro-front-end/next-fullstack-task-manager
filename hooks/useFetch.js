"use client";

import { useEffect, useState } from "react";
import axios from "axios";

function UseFetch(url, method = "GET") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios[method.toLowerCase()](url);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url, method]);

  return { data, loading, error };
}

export default UseFetch;
