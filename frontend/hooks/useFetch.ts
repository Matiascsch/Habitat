import { useState, useEffect } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}

// usage example
// import { useFetch } from "../hooks/useFetch";
// const { data, loading } = useFetch<User>("https://api.example.com/user");