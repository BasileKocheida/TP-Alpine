import data from '../../data';
import { connect } from 'react-redux';
import CardSelection from '../CardSelection';


const mapStateToProps = (state) => {
    return { 
        version: state.version
    }
  };


function SellerieListConnect({version}) {   
   
    function displayCardSellerie(){
        return Object.keys(data.sellerie).map((key)=>{
            // console.log(key);
            // console.log(version.name);
            //Condition verifier si on a choisi pure ou legende par rapport a data.couleur[key]

            if (version.name === 'A110 Pure' && key != 3 && key != 4) {
                
                return <CardSelection 
                            nom={data.sellerie[key].name} 
                            prix={data.sellerie[key].prix} 
                            img={data.sellerie[key].image} 
                            type='sellerie'
                            nextTo='equipements'
                            element={data.sellerie[key]} 
                        />

            }   else if(version.name === 'A110 Legende' && key != 1 && key != 2 ){
                    return <CardSelection 
                                nom={data.sellerie[key].name} 
                                prix={data.sellerie[key].prix} 
                                img={data.sellerie[key].image} 
                                type='sellerie'
                                nextTo='equipements'
                                element={data.sellerie[key]} 
                            />
                }
        })
    }
    return (
        <div className="cards">
            {displayCardSellerie()}
        </div>
    )
}
const SellerieList = connect(mapStateToProps)(SellerieListConnect);

export default SellerieList