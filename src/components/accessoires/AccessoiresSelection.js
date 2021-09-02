import { connect } from 'react-redux';
import {Card} from 'react-bootstrap';
import { choixAccessoires, suppressionAccessoires } from '../../actions/index'
import "./Accessoires.css";


const mapStateToProps = (state, props) => {
  return { 
        props: props,
        state: state
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        choixAccessoires:  (payload) => dispatch(choixAccessoires(payload)),
        suppressionAccessoires:  (payload) => dispatch(suppressionAccessoires(payload)),
    }
}

function AccessoiresSelectionConnect({state, props ,choixAccessoires , suppressionAccessoires}) {
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
            choixAccessoires({accessoire : props.element})                 
        } else {
            console.log('active');
            suppressionAccessoires({accessoire : props.element})
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
                        id='accessoire'
                        onClick={(e)=>handleClick(e)}
                        className={props.prix == 0 ? 'active': ""}
                    >Selectionner</button>
                </Card.Body>

            </Card>
        </div>
    )
}

const AccessoiresSelection = connect(mapStateToProps, mapDispatchToProps)(AccessoiresSelectionConnect);
export default AccessoiresSelection