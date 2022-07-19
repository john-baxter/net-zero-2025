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

    const filteredData = data.filter((id) =>
      id.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())
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
        {dictionary.map(({ id, name, body }) => (
          <DictionaryEntry key={id} id={id} term={name} definition={body} />
        ))}
      </div>
    </MDBContainer>
  );
};

export default DictionaryEntries;
