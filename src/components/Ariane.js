import { useLocation } from 'react-router-dom';

const Ariane = () =>{

    const location = useLocation();

    if (location.pathname === "/couleur"){
        return (
            <div>
                <h5 class="ariane"><a href='/'>Modèle</a> / <a href="/couleur">Couleurs</a></h5>
            </div>
        );
    }else if (location.pathname === "/jantes"){
        return (
            <div>
                <h5 class="ariane"><a href='/'>Modèle</a> / <a href="/couleur">Couleurs</a> / <a href='/jantes'>Jantes</a> </h5>
            </div>
        );
    }else if (location.pathname === "/sellerie"){
        return (
            <div>
                <h5 class="ariane"><a href='/'>Modèle</a> / <a href="/couleur">Couleurs</a> / <a href='/jantes'>Jantes</a> / <a href='/sellerie'>Sellerie</a></h5>
            </div>
        );
    }else if (location.pathname === "/equipements"){
        return (
            <div>
                <h5 class="ariane"><a href='/'>Modèle</a> / <a href="/couleur">Couleurs</a> / <a href='/jantes'>Jantes</a> / <a href='/sellerie'>Sellerie</a> / <a href='/equipements'>Équipements</a></h5>
            </div>
        );
    }else if (location.pathname === "/accessoires"){
        return (
            <div>
                <h5 class="ariane"><a href='/'>Modèle</a> / <a href="/couleur">Couleurs</a> / <a href='/jantes'>Jantes</a> / <a href='/sellerie'>Sellerie</a> / <a href='/equipements'>Équipements</a> / <a href='/accessoires'>Accessoires</a></h5>
            </div>
        );
    }else if (location.pathname === "/recap"){
        return (
            <div>
                <h5 class="ariane"> <a href='/'>Modèle</a> / <a href="/couleur">Couleurs</a> / <a href='/jantes'>Jantes</a> / <a href='/sellerie'>Sellerie</a> / <a href='/equipements'>Équipements</a> / <a href='/accessoires'>Accessoires</a> / <a href='/recap'>Récapitulatif</a></h5>
            </div>
        );
    }else{
        return false
    }
}

export default Ariane;