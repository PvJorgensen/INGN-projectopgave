import { useEffect, useState } from "react";
import { client } from "../static/contentfulClient";

export function useGetImagePosts() {
  const [data, setData] = useState();

  useEffect(() => {
    client
      .getEntries({ content_type: "article" })
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return { data };
}