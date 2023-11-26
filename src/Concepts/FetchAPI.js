/**
 * -----------Fetch API-------------------
 * Fetch API allows you to fetch the data from the server
 * It is easy to use than 'XMLHttpRequest'
 * There is one more alternative which is 'AXIOS';
 * Fetch API return a promise.
 * 
 * NOTE : Always write the 'Fetch API' inside 'useEffect' hook
 */

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
