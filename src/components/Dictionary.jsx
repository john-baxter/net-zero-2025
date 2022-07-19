import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";

import DictionaryEntries from "./DictionaryEntries";

const Dictionary = () => {
  const [error, setError] = useState(null);
  const [dictionary, setDictionary] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments", {
        params: { _limit: 15, offset: 0 },
      })
      .then(({ data }) => setDictionary(data))
      .catch((error) => setError(error));

    // const filteredData =
    // dictionary.filter(name) => name.toLowerCase()
    // .includes(searchTerm.toLocaleLowerCase())

    // setDictionary(filteredData)
  }, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  return (

      
      <DictionaryEntries data={dictionary} />

  
  );
};

export default Dictionary;
