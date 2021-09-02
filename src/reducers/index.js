const initialState = {
    //TODO : complete players {} and monster{}
    version:{},
    color:{},
    jantes: {},
    sellerie: {},
    accessoires : {},
    
    equipements : {
      4 :{ id:4, name : 'Système Audio standard', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/media-et-navigation/audio-standard.jpg'},
      5 :{ id:5, name : 'Retroviseur intérieur électrochrome', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg'},
      8 :{ id:8, name : 'Régulateur / limiteur de vitesse', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg'},
      11 :{ id:11, name : 'Assistance au freinage d\'urgence', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg'},
      13 :{ id:13, name : 'Airbags frontaux conducteur et passager', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/securite/airbag.jpg'},
      16: { id:16, name: 'Etriers de frein couleur Gris Anthracite', prix: 0, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-exterieure/etrier-gris.jpg'},
      18: { id:18, name: 'Harmonie carbone mat', prix: 0, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-interieure/pack-carbone.jpg'},
    },
    pictures:{
      
      1:'',
      2:'',
      3:'',
      4:''
    }
  };
   
  function rootReducer(state = initialState, action) {

    let newState;
    switch (action.type) {
      case 'CHOIX_VERSION':
        newState = {
          ...state,
          version : action.payload.choix,
          pictures: action.payload.images
        }
        console.log('version ', newState);
        return newState
      
      case 'CHOIX_COULEUR':
        newState = {
          ...state,
          color : action.payload.choix,
          pictures: action.payload.images
        }
        console.log('couleurs ', newState);
        return newState
      
      case 'CHOIX_JANTES':
        newState = {
          ...state,
          jantes : action.payload.choix,
          pictures: action.payload.images
        }
        console.log('jantes ', newState);
        return newState

      case 'CHOIX_SELLERIE':
        newState = {
          ...state,
          sellerie : action.payload 
        }
        console.log('sellerie ', newState);
        return newState
      
      case 'CHOIX_EQUIPEMENTS':
        newState = {
          ...state,
          equipements : {
            ...state.equipements,
           [action.payload.equipement.id]:  action.payload.equipement
          }
        }
        console.log('equipements ', newState);
        return newState
      case 'SUPPRESSION_EQUIPEMENTS':
        newState = {
          ...state,
          equipements: delete state.equipements[action.payload.equipement.id],
          equipements : {
            ...state.equipements,
          }
        }
        console.log('equipements ', newState);
        return newState

        case 'CHOIX_ACCESSOIRES':
        newState = {
          ...state,
          accessoires : {
            ...state.accessoires,
           [action.payload.accessoire.id]:  action.payload.accessoire
          }
        }
        console.log('accessoires ', newState);
        return newState
      case 'SUPPRESSION_ACCESSOIRES':
        newState = {
          ...state,
          accessoires: delete state.accessoires[action.payload.accessoire.id],
          accessoires : {
            ...state.accessoires,
          }
        }
        console.log('accessoires ', newState);
        return newState

      default:
        return state;
    }
  };
   
  export default rootReducer;
  