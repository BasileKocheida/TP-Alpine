import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'react-bootstrap';

const mapStateToProps = (state) => {
    return { 
        state : state,
        equipements : state.equipements,
        accessoires : state.accessoires
    }
  };

  
function RecapFinalConnect({state, equipements, accessoires}) {

    const totalAccessoires = () => {
        return Object.values(accessoires).reduce((total, value) => total + value.prix, 0)
      }
    
    const totalEquipement = () => {
        return Object.values(equipements).reduce((total, value) => total + value.prix, 0)
    }

    let total = totalAccessoires() + totalEquipement() + state.version.prix + state.color.prix + state.jantes.prix + state.sellerie.prix;
    let totalFinal = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(total);


    function recapEquipement(){
        
        return Object.keys(equipements).map((key)=>{

            return <div className="mx-5">
                        <p>
                            <img src="https://img.icons8.com/ios-glyphs/20/000000/hennessey-venom.png" /> 
                              {' ' + equipements[key].name} :<br></br> {equipements[key].prix} €
                        </p>
                   </div>
        })
    }

    function recapAccessoires(){
        
        return Object.keys(accessoires).map((key)=>{

            return <div>
                        <p>
                            <img src="https://img.icons8.com/ios-glyphs/20/000000/hennessey-venom.png" /> 
                            {' ' + accessoires[key].name} :<br></br> {accessoires[key].prix} €
                        </p>
                   </div>
        })
    }

    function recapChoix(){
        let prix = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(state.version.prix);

        return (
            <div>
                <h1>Vos Choix</h1>
                <div>
                    <h3>Modèle</h3>
                    <b>{state.version.name} :<br></br> {prix} </b>
                </div>
                <br></br>
                <div>
                    <h3>Couleur</h3>
                    <b>{state.color.name} :<br></br> {state.color.prix} €</b>
                </div>
                <br></br>
                <div>
                    <h3>Jantes</h3>
                    <b>{state.jantes.name} :<br></br> {state.jantes.prix} €</b>
                </div>
                <br></br>
                <div>
                    <h3>Sellerie</h3>
                    <b>{state.sellerie.name} :<br></br> {state.sellerie.prix} €</b>
                </div>
            </div>
        )
    }

    return (
        <div className='recapFinal'>
        <Container>
            <Row className="w-100">
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-0 p-0">
                    <div className='p-4'>

                        {recapChoix()}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-0 p-0">
                    <div className='p-4'>

                        <h3>Équipement(s)</h3>
                    </div>
                    {recapEquipement()}
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-0 p-0">
                    <div className='p-4'>

                        <h3>Accessoire(s)</h3>
                    </div>
                    {recapAccessoires()}
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-0 p-0">
                    <div className='p-4'>

                        <h1>Total : <br></br> {totalFinal} 
                    </h1>
                    </div>
                </div>
            </Row>
        </Container>
        </div>
    )
}

const RecapFinal = connect(mapStateToProps)(RecapFinalConnect);
export default RecapFinal;