import React from "react";
import { useEffect, useState } from "react";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import DictionaryEntry from "./DictionaryEntry";

const DictionaryEntries = (props) => {
  const { data } = props;

  const [dictionary, setDictionary] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setDictionary(data);

    const filteredData = data.filter((index) =>
      index.attributes.term.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );

    setDictionary(filteredData);
  }, [data, searchTerm]);

  return (
    <MDBContainer>
      <MDBInput 
        label="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="d-flex justify-content-center flex-row flex-wrap">
        {dictionary.map(({ id, attributes }) => (
          <DictionaryEntry key={id} id={id} term={attributes.term} definition={attributes.definition} />
        ))}
      </div>
    </MDBContainer>
  );
};

export default DictionaryEntries;
