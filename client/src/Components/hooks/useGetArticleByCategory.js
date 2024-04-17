import { useEffect, useState } from "react";
import { client } from "../static/contentfulClient";

export function useGetArticleByCategory(selectedCategory) {
  const [data, setData] = useState();

  useEffect(() => {
    client
      .getEntries({ 
        content_type: "article",
        "fields.category[match]": selectedCategory,
      })
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [selectedCategory]);

  return { data };
}