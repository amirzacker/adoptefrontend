import { Tabs, Tab } from "react-bootstrap";
import Adoption from "./Adoption";
import AdoptionCompany from "./AdoptionCompany";
import AdoptionStudent from "./AdoptionStudent";
import ContractsStudent from "./ContractsStudent";
import HistoryCompany from "./HistoryCompany";
import HistoryStudent from "./HistoryStudent";
import MyAdoptionCompany from "./MyAdoptionCompany";
import MyAdoptionStudent from "./MyAdoptionStudent";
import MyContractsCompany from "./MyContractsCompany";
import MyContractsStudent from "./MyContractsStudent";
import "./table.css";
export default function Table({ currentUser }) {
  return (
    <div className="table">
      <Tabs defaultActiveKey="adoptions" id="uncontrolled-tab-example">
        <Tab eventKey="adoptions" title="Adoptions">
          {currentUser?.user?.isCompany ? (
            <AdoptionCompany currentUser={currentUser} />
          ) : (
            <AdoptionStudent currentUser={currentUser} />
          )}
        </Tab>

        <Tab eventKey="my-adoptions" title="Mes Adoptions">
          {currentUser?.user?.isCompany ? (
            <MyAdoptionCompany currentUser={currentUser} />
          ) : (
            <MyAdoptionStudent currentUser={currentUser} />
          )}
        </Tab>

        <Tab eventKey="historique" title="historique">
          {currentUser?.user?.isCompany ? (
            <HistoryCompany currentUser={currentUser} />
          ) : (
            <HistoryStudent currentUser={currentUser} />
          )}
        </Tab>

        {currentUser?.user?.isCompany ? null : (
          <Tab eventKey="contracts" title="Contrats">
            <ContractsStudent currentUser={currentUser} />
          </Tab>
        )}

        <Tab eventKey="my-contracts" title="Mes Contrats">
          {currentUser?.user?.isCompany ? (
            <MyContractsCompany currentUser={currentUser} />
          ) : (
            <MyContractsStudent currentUser={currentUser} />
          )}
        </Tab>

        <Tab eventKey="favoris" title="Favoris">
          {currentUser?.user?.isCompany ? (
            <Adoption currentUser={currentUser} />
          ) : (
            null
          )}
        </Tab>
      </Tabs>
    </div>
  );
}
