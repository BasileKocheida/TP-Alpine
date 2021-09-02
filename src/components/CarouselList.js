import { Button, Card } from 'react-bootstrap';
import data from '../data';
import { choixVersion } from '../actions/index'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import dataCarousel from '../dataCarousel';
const mapStateToProps = (state) => {
  return { 
      
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    
    ActionChoixVersion: (payload) => dispatch(choixVersion(payload)),

  }
}


function CarouselListConnect({ActionChoixVersion}) {
    // console.log(data);

    function selectVersion(choiceVersion){
        let pictures = dataCarousel.version[choiceVersion.name].couleur[1][1].pictures  
        ActionChoixVersion({choix : choiceVersion, images: pictures})
    }


    function displayItemCarousel(){
        return Object.keys(data.version).map((key)=>{
            
            let prix = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(data.version[key].prix);

            return  (
                
                    <Card className='cardHome' style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={data.version[key].photos} />
                        <Card.Body>
                            <Card.Title>Modèle {data.version[key].name}</Card.Title>
                            <Card.Text>
                                <p> À partir de {prix}</p>
                            </Card.Text>
                                <Link to="/couleur">
                                    <Button onClick={()=>selectVersion(data.version[key])} variant="outline-light">Choisir la version {key}</Button>
                                </Link>
                        </Card.Body>
                    </Card>

            )
        })
    }



    return (
        <Card className='carouselList'>
            {displayItemCarousel()}
        </Card>
    )
}
const CarouselList = connect(mapStateToProps, mapDispatchToProps)(CarouselListConnect);
export default CarouselList