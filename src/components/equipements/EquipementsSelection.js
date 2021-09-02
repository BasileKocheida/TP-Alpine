import { connect } from 'react-redux';
import {Card} from 'react-bootstrap';
import { choixEquipements, suppressionEquipements } from '../../actions/index'
import "./Equipement.css"


const mapStateToProps = (state, props) => {
  return { 
        props: props,
        state: state
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        choixEquipements:  (payload) => dispatch(choixEquipements(payload)),
        suppressionEquipements:  (payload) => dispatch(suppressionEquipements(payload)),
    }
}

function EquipementsSelectionConnect({state, props ,choixEquipements, suppressionEquipements}) {
    function handleClick(e){
        e.preventDefault()
        let test = document.querySelectorAll('[data-element-id="'+e.target.getAttribute('data-element-id')+'"]')
        if (test.length >1) {
            test.forEach(element => {
                element.classList.remove('active')
                e.target.classList.add('active')
            });
        }else{
            e.target.classList.toggle('active')
        }
        console.log(e.target.classList.contains('active'));
        if (e.target.classList.contains('active')) {
            choixEquipements({equipement : props.element})
        } else {
            console.log('la moula');
            suppressionEquipements({equipement : props.element})
        }
    }
    return (
        <div className='oneCard'>
            <Card style={{ width: '12rem' }}>

                <Card.Img variant="top" src={props.img} />

                <Card.Body>
                    <Card.Title>{props.nom}</Card.Title>

                    <Card.Text>
                        {props.prix} €
                    </Card.Text>
                    <button 
                        data-element-id= {props.element.id}
                        id='equipement'
                        onClick={(e)=>handleClick(e)}
                        className={props.prix == 0 ? 'active': ""}
                    >Selectionner</button>
                </Card.Body>

            </Card>
        </div>
    )
}

const EquipementsSelection = connect(mapStateToProps, mapDispatchToProps)(EquipementsSelectionConnect);
export default EquipementsSelection