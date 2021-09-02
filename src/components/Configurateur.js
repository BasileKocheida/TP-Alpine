import React from 'react';
import './Configurateur.css';
import CarouselList from './CarouselList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ColorList from './couleur/ColorList'
import JantesList from './jantes/JantesList'
import SellerieList from './sellerie/SellerieList'
import Modelisation from './Modelisation'
import EquipementsList from './equipements/EquipementsList';
import AccessoiresList from './accessoires/AccessoiresList';
import RecapFinal from './RecapFinal';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Ariane from './Ariane';



const Configurateur = () => {
  return (
  <div className="Configurateur">

    <Router>
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/couleur">
            <Modelisation />
            <Ariane />
            <ColorList />
          </Route>
          <Route path="/jantes">
            <Modelisation />
            <Ariane />
            <JantesList />
          </Route>
          <Route path="/sellerie">
            <Modelisation />
            <Ariane />
            <SellerieList />
          </Route>
          <Route path="/equipements">
            <Modelisation />
            <Ariane />
            <EquipementsList />
          </Route>
          <Route path="/accessoires">
            <Modelisation />
            <Ariane />
            <AccessoiresList />
          </Route>
          <Route path="/recap">
            <Modelisation />
            <Ariane />
            <RecapFinal />
          </Route>
          <Route path="/">
          <h1 className="title-config">CONFIGUREZ VOTRE ALPINE</h1>
            <CarouselList />
          </Route>
        </Switch>
      </div>
    </Router>
  </div>
  );
}

export default Configurateur;


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}