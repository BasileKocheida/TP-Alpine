import data from '../../data';
import { connect } from 'react-redux';
import CardSelection from '../CardSelection';
import EquipementsSelection from './EquipementsSelection';
import RecapPrix from './RecapEquipements';
import {Button, Tabs, Tab, Form} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const mapStateToProps = (state) => {
    return { 
        equipements: state.equipements
    }
  };
  
function EquipementsListConnect() {

    function displayCardEquipements(key){
        return Object.keys(data.equipements[key]).map((key2)=>{  
            return <EquipementsSelection 
            nom={data.equipements[key][key2].name} 
            prix={data.equipements[key][key2].prix} 
            img={data.equipements[key][key2].image} 
            type='equipements'
            nextTo='accessoires'
            element={data.equipements[key][key2]}
            key={key, key2}
            />
        })
    }
    return (
        <div className="cards">
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                { Object.keys(data.equipements).map((key)=>{
                    return (
                        <Tab defaultActiveKey={data.equipements.design} eventKey={key} title={key.replace('design', 'Design').replace('mediaNavigation', 'Média et Navigation').replace('confort', 'Confort').replace('conduite', 'Conduite').replace('securite', 'Sécurité').replace('persoExterieur', 'Personnalisation Ext.').replace('persoInterieur', 'Personnalisation Int.')}
                        >
                            <div className="displayCard">
                                {displayCardEquipements(key)}
                            </div>
                        </Tab>
                        
                    )
                })}
                <Tab defaultActiveKey='design' eventKey='key' title='Suivant'>
                    
                    <RecapPrix />
                </Tab>
                </Tabs>
        </div>
    )
}


const EquipementsList = connect(mapStateToProps)(EquipementsListConnect);
export default EquipementsList;