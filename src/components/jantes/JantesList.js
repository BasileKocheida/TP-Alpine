import data from '../../data';
import { connect } from 'react-redux';
import CardSelection from '../CardSelection';


const mapStateToProps = (state) => {
    return { 
        version: state.version,
        color: state.color
    }
  };


function JantesListConnect({version, color}) {  

    function displayImgJantes(key){
        switch (color.name) {
            case "Teinte spéciale Bleu Alpine":
                return data.jantes[key].couleur.imgBleu
            case "Teinte métallisée Noir Profond":
                return data.jantes[key].couleur.imgNoir
            case "Peinture opaque Blanc Glacier":
                return data.jantes[key].couleur.imgBlanc
            default:
                return data.jantes[key].couleur.imgBlanc
        }
    }
   
    function displayCardJantes(){
        return Object.keys(data.jantes).map((key)=>{
            //Condition verifier si on a choisi pure ou legende par rapport a data.couleur[key]

            if (version.name === 'A110 Pure' && key != 'legende') {
                
                return <CardSelection 
                            nom={data.jantes[key].name} 
                            prix={data.jantes[key].prix} 
                            img={displayImgJantes(key)}
                            type='jantes'
                            nextTo='sellerie'
                            element={data.jantes[key]} 
                        />

            }   else if(version.name === 'A110 Legende' && key != 'serac' && key != 'standard'){
                    return <CardSelection 
                                nom={data.jantes[key].name} 
                                prix={data.jantes[key].prix} 
                                img={displayImgJantes(key)} 
                                type='jantes'
                                nextTo='sellerie'
                                element={data.jantes[key]} 
                            />
                }
        })
    }
    return (
        <div className="cards">
            {displayCardJantes()}
        </div>
    )
}
const JantesList = connect(mapStateToProps)(JantesListConnect);

export default JantesList