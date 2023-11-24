import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [data, setData] = useState();
  const url = "https://jsonplaceholder.typicode.com/posts?_limit=10";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, []);
}

export default FetchAPI;
