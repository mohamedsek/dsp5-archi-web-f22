function Fct_valideConnexion(){
    var v_user=document.getElementById("identifiant").value;
    var v_mdp=document.getElementById("Mdp").value;
    var v_mesErreur=document.querySelector('#mesErreur');

    v_mesErreur.innerHTML="";

    if(v_user=="Admin" && v_mdp=="user"){

        window.location.assign("page_admin.html");

    }else{

        v_mesErreur.innerHTML="Erreur de connexion";

    }

}