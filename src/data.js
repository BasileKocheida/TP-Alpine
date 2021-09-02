const data = {

    version : {
        pure : {
            name : 'A110 Pure',
            prix : 54700,
            photos : './AlpineCars_app-images/configurateur/modele/selection/pure.png',   
        },
        legende: {
            name : 'A110 Legende',
            prix : 58500,
            photos :  './AlpineCars_app-images/configurateur/modele/selection/legende.png', 
        }
    },

    couleur : {
        blanc : {name : 'Peinture opaque Blanc Glacier', prix: 0, image : "./AlpineCars_app-images/configurateur/couleurs/selection/blanc.jpg"}, 
        noir: {name : 'Teinte métallisée Noir Profond', prix: 840, image : "./AlpineCars_app-images/configurateur/couleurs/selection/noir.jpg"}, 
        bleu: {name : 'Teinte spéciale Bleu Alpine', prix: 1800, image : "./AlpineCars_app-images/configurateur/couleurs/selection/bleu.jpg"},
    },

    jantes: {
        standard: {
            name : 'Standard', 
            prix: 0, 
            image:'./AlpineCars_app-images/configurateur/jantes/selection/jante-standard.jpg', 
            couleur : { 
                imgBleu : './AlpineCars_app-images/configurateur/jantes/vues/couleur-bleu_jante-standard (3).jpg', 
                imgBlanc :'./AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-standard (2).jpg', 
                imgNoir : './AlpineCars_app-images/configurateur/jantes/vues/couleur-noir_jante-standard (1).jpg'
            }
        },

        serac: {
            name : 'Serac', 
            prix: 1000, 
            image:'./AlpineCars_app-images/configurateur/jantes/selection/jante-serac.jpg', 
            couleur : { 
                imgBleu : './AlpineCars_app-images/configurateur/jantes/vues/couleur-bleu_jante-serac (3).jpg', 
                imgBlanc :'./AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-serac (2).jpg', 
                imgNoir : './AlpineCars_app-images/configurateur/jantes/vues/couleur-noir_jante-serac (1).jpg'
            }
        },

        legende: {
            name : 'Légende', 
            prix: 0, 
            image:'./AlpineCars_app-images/configurateur/jantes/selection/jante-legende.jpg', 
            couleur : { 
                imgBleu : './AlpineCars_app-images/configurateur/jantes/vues/couleur-bleu_jante-legende (3).jpg', 
                imgBlanc : './AlpineCars_app-images/configurateur/jantes/vues/couleur-blanc_jante-legende (2).jpg', 
                imgNoir : './AlpineCars_app-images/configurateur/jantes/vues/couleur-noir_jante-legende (1).jpg'
            }
        }
    },

    sellerie: {
        1: {name: 'Sièges baquets en cuir noir et Dinamica', prix: 0, image:'./AlpineCars_app-images/configurateur/interieurs/selection/cuir-noir_dinamica.jpg'},
        2: {name: 'Sièges Confort en cuir noir perforé', prix: 800, image:'./AlpineCars_app-images/configurateur/interieurs/selection/cuir-noir_perfore.jpg'},
        3: {name: 'Sièges Confort en cuir noir', prix: 0, image:'./AlpineCars_app-images/configurateur/interieurs/selection/cuir-noir.jpg'},
        4: {name: 'Sièges Confort en cuir brun', prix: 800, image:'./AlpineCars_app-images/configurateur/interieurs/selection/cuir-brun.jpg'}
    },
  
    equipements :{
        design :{
            1 : { id:1, name : 'Pack héritage', prix : 180, image : './AlpineCars_app-images/configurateur/equipements/categories/design/pack-heritage.jpg'},
            2 : { id:2, name : 'Repose-pieds passager en aluminium', prix : 96, image : './AlpineCars_app-images/configurateur/equipements/categories/design/repose-pied-alu.jpg'},
        },
        mediaNavigation : {
            1 :{ id:3, name : 'Alpine Télémétrics', prix : 204, image : './AlpineCars_app-images/configurateur/equipements/categories/media-et-navigation/alpine-metrics.jpg'},
            2 :{ id:4, name : 'Système Audio Focal', prix : 600, image : './AlpineCars_app-images/configurateur/equipements/categories/media-et-navigation/audio-focal.jpg'},
            3 :{ id:4, name : 'Système Audio Focal Premium', prix : 1200, image : './AlpineCars_app-images/configurateur/equipements/categories/media-et-navigation/audio-premium.jpg'},
            4 :{ id:4, name : 'Système Audio standard', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/media-et-navigation/audio-standard.jpg'}
        },
        confort :{
            1 :{ id:5, name : 'Retroviseur intérieur électrochrome', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/confort/retro-int-electrochrome.jpg'},
            2 :{ id:6, name : 'Rétroviseurs ext. chauf. rabattables élec.', prix : 504, image : './AlpineCars_app-images/configurateur/equipements/categories/confort/retro-ext-chaffant.jpg'},
            3 :{ id:7, name : 'Pack de rangement', prix : 504, image : './AlpineCars_app-images/configurateur/equipements/categories/confort/pack-rangement.jpg'},
            4 :{ id:8, name : 'Régulateur / limiteur de vitesse', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/confort/regul-limit-vitesse.jpg'}
        },
        conduite :{
            1 :{ id:9, name : 'Aide au stationnement AR', prix : 420, image : './AlpineCars_app-images/configurateur/equipements/categories/conduite/aide-stationnement-ar.jpg'},
            2 :{ id:9, name : 'Aide au stationnement AR et AV', prix : 750, image : './AlpineCars_app-images/configurateur/equipements/categories/conduite/aide-stationnement-av-ar.jpg'},
            3 :{ id:9, name : 'Aide au stationnement AV AR et caméra de recul', prix : 1200, image : './AlpineCars_app-images/configurateur/equipements/categories/conduite/camera-recul.jpg'},
            4 :{ id:10, name : 'Echappement Sport actif', prix : 1500, image : './AlpineCars_app-images/configurateur/equipements/categories/conduite/echappement-sport.jpg'},
        },
        securite :{
            1 :{ id:11, name : 'Assistance au freinage d\'urgence', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/securite/aide-freinage-durgence.jpg'},
            2 :{ id:12, name : 'Système de freinage Haute-Perf 320mm', prix : 1000, image : './AlpineCars_app-images/configurateur/equipements/categories/securite/freinage-haute-perf.jpg'},
            3 :{ id:13, name : 'Airbags frontaux conducteur et passager', prix : 0, image : './AlpineCars_app-images/configurateur/equipements/categories/securite/airbag.jpg'}
        },

        persoExterieur: {
            1: { id:14, name: 'Etriers de frein couleur Bleu Alpine', prix: 384, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-exterieure/etrier-bleu.jpg'},
            2: { id:15, name: 'Logo Alpine sur les ailes avant', prix: 120, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-exterieure/logo-alpine.jpg'},
            3: { id:16, name: 'Etriers de frein couleur Gris Anthracite', prix: 0, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-exterieure/etrier-gris.jpg'},
        },
    
        persoInterieur: {
            1: { id:17, name: 'Pédalier en aluminium', prix: 120, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-interieure/pedal-alu.jpg'},
            2: { id:18, name: 'Harmonie carbone mat', prix: 0, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-interieure/pack-carbone.jpg'},
            3: { id:19, name: 'Logo au centre du volant en Bleu Alpine', prix: 84, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-interieure/logo-volant.jpg'},
            4: { id:20, name: 'Sièges chauffants', prix: 400, image:'./AlpineCars_app-images/configurateur/equipements/categories/personnalisation-interieure/siege-chauffant.jpg'},
        },
    },
    accessoires :{
        transportProtection :{
            1 : {id:1, name : 'Extincteur 1kg avec manomètre', prix : 22, image : './AlpineCars_app-images/configurateur/accessoires/transport-et-protection/extincteur.jpg'},
            2 : {id:2, name : 'Fixation extincteur', prix : 72, image : './AlpineCars_app-images/configurateur/accessoires/transport-et-protection/fixation-extincteur.jpg'},
            3 : {id:3, name : 'Chaine à neige Premium Grip', prix : 336, image : './AlpineCars_app-images/configurateur/accessoires/transport-et-protection/chaaine-neige.jpg'},
            4 : {id:4, name : 'Alarme', prix : 543, image : './AlpineCars_app-images/configurateur/accessoires/transport-et-protection/alarme.jpg'},
            5 : {id:5, name : 'Protection Prise OBD', prix : 99, image : './AlpineCars_app-images/configurateur/accessoires/transport-et-protection/protection-obd.jpg'},
            6 : {id:6, name : 'Kit de sécurité', prix : 20, image : './AlpineCars_app-images/configurateur/accessoires/transport-et-protection/kit-securite.jpg'}
        },
        multimedia :{
            1 : {id:7, name : 'Support caméra sport', prix : 89, image :'./AlpineCars_app-images/configurateur/accessoires/multimedia/support-camera.jpg'},
            2 : {id:8, name : 'Support smartphone magnétique - Fixation sur tableau de bord', prix : 21, image :'./AlpineCars_app-images/configurateur/accessoires/multimedia/support-smartphone.jpg'}
        },
        interieur : {
            1 : {id:9, name : 'Tapis de coffre', prix : 83, image : './AlpineCars_app-images/configurateur/accessoires/interieur/tapis-coffre.jpg'},
            2 : {id:10, name : 'Filet de rangement - Horizontal', prix : 59, image : './AlpineCars_app-images/configurateur/accessoires/interieur/filet-rangement.jpg'}
        },
        materielGarage : {
            1 : {id:11, name : 'Chargeur batterie', prix : 240, image : './AlpineCars_app-images/configurateur/accessoires/garage/chargeur-batterie.jpg' },
            2 : {id:12, name : 'Kit Outils Alpine', prix : 398, image : './AlpineCars_app-images/configurateur/accessoires/garage/kit-outils.jpg' }
        },
        exterieur : {
            1 : {id:13, name : 'Cabochons Alpine - Métalisés', prix : 24, image : './AlpineCars_app-images/configurateur/accessoires/exterieur/cabochons-metal.jpg' },
            2 : {id:14, name : 'Housse de protection Alpine', prix : 216, image : './AlpineCars_app-images/configurateur/accessoires/exterieur/housse.jpg' },
            3 : {id:15, name : 'Antivols pour jante - Noirs', prix : 51, image : './AlpineCars_app-images/configurateur/accessoires/exterieur/antivol-jantes.jpg' }
        }
    },
    

}

export default data;