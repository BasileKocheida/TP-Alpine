import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const mapStateToProps = (state) => {
    return { 
        equipements : state.equipements
    }
  };

  
function RecapPrixConnect({equipements}) {

    const totalPrix = () => {
        return Object.values(equipements).reduce((total, value) => total + value.prix, 0)
      }
    
    function recapChoix(){
        
        return Object.keys(equipements).map((key)=>{

            return <div>
                        <ul>
                            <li>{equipements[key].name} : {equipements[key].prix}€</li>
                        </ul>
                   </div>
        })
    }

    return (
        
  <div className='recapEquipements'>
    <Container>
        <Row>
            <h1>Récapitulatif équipements</h1>
            <Col>
                <p>{recapChoix()}</p>
            </Col>
            <Col>
                <div>
                    <p className='total'>Total : {totalPrix()} €</p>
                </div>
                <Link to="/accessoires">
                        <Button >Suivant</Button>
                </Link>
            </Col>
        </Row>
    </Container>
  </div>
    )
}

const RecapPrix = connect(mapStateToProps)(RecapPrixConnect);
export default RecapPrix;