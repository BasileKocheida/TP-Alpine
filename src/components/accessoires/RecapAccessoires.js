import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const mapStateToProps = (state) => {
    return { 
        accessoires : state.accessoires
    }
  };


function RecapAccessoiresConnect({accessoires}) {

    const totalPrix = () => {
        return Object.values(accessoires).reduce((total, value) => total + value.prix, 0)
      }

    function recapChoix(){

        return Object.keys(accessoires).map((key)=>{

            return <div>
                        <ul>
                        <li>{accessoires[key].name} : {accessoires[key].prix}€</li>
                        </ul>
                   </div>
        })
    }

    return (
  <div className='recapAccessoires'>
        <Container>
            <Row>
            <h1 >Récapitulatif accessoires</h1>
                <Col>
                    <p>{recapChoix()}</p>
                    </Col>
                <Col>
                    <div>
                        <p className='total'>Total : {totalPrix()} €</p>
                    </div>
                    <Link to="/recap">
                            <Button >Suivant</Button>
                    </Link>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

const RecapAccessoires = connect(mapStateToProps)(RecapAccessoiresConnect);
export default RecapAccessoires;