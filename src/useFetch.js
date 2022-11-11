import { useState, useEffect } from "react";
import paginate from "./utils";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(paginate(data));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return { data, loading };
};

export default useFetch;
