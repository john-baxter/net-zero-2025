import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";


import DictionaryEntries from "./DictionaryEntries";

const Dictionary = () => {
  const [error, setError] = useState(null);
  const [dictionary, setDictionary] = useState([]);


  useEffect(() => {
    axios
      .get("https://fierce-inlet-05264.herokuapp.com/api/definitions")
      .then(({ data }) => setDictionary(data.data))
      .catch((error) => setError(error));


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
