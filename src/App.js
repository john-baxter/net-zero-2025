import React, { useState } from 'react';
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import RoadmapContainer from "./components/RoadmapContainer";
import Quiz from "./components/Quiz";
import Dictionary from "./components/Dictionary";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';

function App() {

  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  return (
    <div className="App">
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Roadmap
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Dictionary
          </MDBTabsLink>
        </MDBTabsItem>
     
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}> <RoadmapContainer /></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><Dictionary /></MDBTabsPane>
    
      </MDBTabsContent>
     
      <Quiz />
      
    </div>
  );
}

export default App;
