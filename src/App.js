import { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCollapse,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "./App.css";
import RoadmapContainer from "./components/RoadmapContainer";
import Dictionary from "./components/Dictionary";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import QuizDataHandler from "./components/QuizDataHandler";
import TipsAndTricks from "./components/TipsAndTricks";
import CalcWrapper from "./components/CalcWrapper";

function App() {
  const [basicActive, setBasicActive] = useState("tab1");
  const [dictionary, setDictionary] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fierce-inlet-05264.herokuapp.com/api/definitions")
      .then(({ data: { data: res }}) => {

        setDictionary(res.map( ({attributes}) => {
          return {term: attributes.term, definition: attributes.definition};
        }));
      })
      .catch((error) => setError(error));
  }, []);

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <div className="App">
      <Navbar />

      <HeroImage />
      <div className="d-flex justify-content-center py-3">
        <MDBTabs className="mb-3">
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab1")}
              active={basicActive === "tab1"}
            >
              Roadmap
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab2")}
              active={basicActive === "tab2"}
            >
              Dictionary
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleBasicClick("tab3")}
              active={basicActive === "tab3"}
            >
              Tips & Tricks
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>
      </div>
      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}>
          <RoadmapContainer dictionary={dictionary}/>
          <MDBContainer>
            <MDBRow>
              <MDBCol size={12} lg={4} xs={12}>
                <QuizDataHandler />
              </MDBCol>
{/* REPLACE ONE OF THE CALCWRAPPER COMPNTS W STATS SECTION :))))) */}
              <MDBCol  size={12} lg={4} xs={12}>
                <CalcWrapper/>
              </MDBCol>
              <MDBCol size={12} lg={4} xs={12}>
                <CalcWrapper />
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab2"}>
          <Dictionary dictionary={dictionary} error={error} />
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab3"}>
          <TipsAndTricks />
        </MDBTabsPane>
      </MDBTabsContent>
    </div>
  );
}

export default App;
