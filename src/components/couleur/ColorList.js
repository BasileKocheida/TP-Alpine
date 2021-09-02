import data from '../../data';
import { connect } from 'react-redux';
import CardSelection from '../CardSelection';


const mapStateToProps = (state) => {
    return { 
        color: state.color
    }
  };

function ColorListConnect() {   
   
    function displayCardColor(){
        return Object.keys(data.couleur).map((key)=>{
            //Condition verifier si on a choisi pure ou legende par rapport a data.couleur[key]
            return <CardSelection 
                        nom={data.couleur[key].name} 
                        prix={data.couleur[key].prix} 
                        img={data.couleur[key].image} 
                        type='couleur'
                        nextTo='jantes'
                        element={data.couleur[key]} 
                    />
        })
    }
    return (
        <div className="cards">
            {displayCardColor()}
        </div>
    )
}
const ColorList = connect(mapStateToProps)(ColorListConnect);

export default ColorList