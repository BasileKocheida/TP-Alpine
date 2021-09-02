import data from '../../data';
import { connect } from 'react-redux';
import AccessoiresSelection from './AccessoiresSelection';
import {Card, Tabs, Tab, Form, Button} from 'react-bootstrap';
import RecapAccessoires from './RecapAccessoires';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


const mapStateToProps = (state) => {
    return { 
        accessoires: state.accessoires
    }
  };
  
function AccessoiresListConnect() {

    function displayCardAccessoires(key){
        return Object.keys(data.accessoires[key]).map((key2)=>{  
            return <AccessoiresSelection 
            nom={data.accessoires[key][key2].name} 
            prix={data.accessoires[key][key2].prix} 
            img={data.accessoires[key][key2].image} 
            type='accessoires'
            nextTo=''
            element={data.accessoires[key][key2]}
            key={key, key2}
            />
        })
    }
    return ( 
        <div className="cards">
                <Tabs id="uncontrolled-tab-example" className="mb-3">
                { Object.keys(data.accessoires).map((key)=>{
                    return (
                       
                        <Tab className="tab-content w-100" defaultActiveKey={data.accessoires.transportProtection} eventKey={key} title={key.replace('transportProtection', 'Transport Et Protection').replace('multimedia', 'Multimédia').replace('interieur', 'Intérieur').replace('materielGarage', 'Matériel de garage').replace('exterieur', 'Extérieur')} >
                            <div className="displayCard">
                                {displayCardAccessoires(key)}
                            </div>
                        </Tab>
                        
                    )
                })}

                <Tab defaultactivekey="transportProtection" title='Récapitulatif' eventKey="recap">
                        
                    <RecapAccessoires />
                </Tab>
                </Tabs>
        </div>
    )
}


const AccessoiresList = connect(mapStateToProps)(AccessoiresListConnect);
export default AccessoiresList;