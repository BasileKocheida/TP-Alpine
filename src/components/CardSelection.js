import { Button, Card } from 'react-bootstrap';
import { choixCouleur } from '../actions/index';
import { choixJantes } from '../actions/index';
import { choixSellerie } from '../actions/index';
import { choixEquipements } from '../actions/index';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import dataCarousel from '../dataCarousel';

const mapStateToProps = (state, props) => {
  return { 
        props:props,
        state: state
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatching plain actions

        ActionChoixCouleur: (payload) => dispatch(choixCouleur(payload)),
        ActionChoixJantes: (payload) => dispatch(choixJantes(payload)),
        ActionChoixSellerie: (payload) => dispatch(choixSellerie(payload)),
        // ActionChoixEquipements: (payload) => dispatch(choixEquipements(payload)),

    }
}


function CardSelectionConnect({
            state, 
            props, 
            ActionChoixCouleur, 
            ActionChoixJantes, 
            ActionChoixSellerie, 

        }) {

    //Pour la route 

    function handleClick(){
        let pictures;
        switch (props.type) {
            case 'couleur':

                Object.keys(dataCarousel.version[state.version.name].couleur).map((key)=>{
                    
                    if (dataCarousel.version[state.version.name].couleur[key].name == props.nom ) {
                        pictures = dataCarousel.version[state.version.name].couleur[key][1].pictures
                    }
                })
                ActionChoixCouleur({choix: props.element, images: pictures })
                break;
            
            case 'jantes':
                Object.keys(dataCarousel.version[state.version.name].couleur).map((key)=>{
                    
                    if (dataCarousel.version[state.version.name].couleur[key].name == state.color.name) {
                        Object.keys(dataCarousel.version[state.version.name].couleur[key]).map((indexOfRims)=>{
                            if (indexOfRims !== 'name') {
                                if (dataCarousel.version[state.version.name].couleur[key][indexOfRims].name == props.nom) {
                                    pictures = dataCarousel.version[state.version.name].couleur[key][indexOfRims].pictures
                                }
                            }
                        })
                    }
                })
                ActionChoixJantes({choix: props.element, images: pictures})
                break;
            
            case 'sellerie':

                ActionChoixSellerie(props.element)
                break;
        
            default:
                break;
        }
    }

    return (
        <div className='oneCard'>
            <Card style={{ width: '12rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.nom}</Card.Title>
                    <Card.Text>
                        {props.prix}€
                    </Card.Text>
                    <Link to={'/' + props.nextTo}>
                        <Button onClick={()=>handleClick()} variant="primary">Selectionner</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )

}
const CardSelection = connect(mapStateToProps, mapDispatchToProps)(CardSelectionConnect);
export default CardSelection