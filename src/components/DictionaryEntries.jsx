import React from "react";
import { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import DictionaryEntry from "./DictionaryEntry";

const DictionaryEntries = (props) => {
  const { data } = props;

  const [dictionary, setDictionary] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {

    const filteredData = data.filter((row) => {
      return row.term.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    });

    setDictionary(filteredData);
  }, [data, searchTerm]);

  return (
    <MDBContainer>
      <MDBInput
        label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="d-flex justify-content-center flex-row flex-wrap">
        {dictionary.map(({ term, definition}, index) => (
          <DictionaryEntry key={index} term={term} definition={definition} />
        ))}
      </div>
    </MDBContainer>
  );
};

export default DictionaryEntries;
