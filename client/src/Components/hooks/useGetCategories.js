import { useEffect, useState } from "react";
import { client } from "../static/contentfulClient";

export function useGetCategories() {
  const [data, setData] = useState();

  useEffect(() => {
    client
      .getEntries({ content_type: "categories" })
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return { data };
}