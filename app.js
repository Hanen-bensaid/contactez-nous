const prénom = document.querySelector('.prénom');
const email = document.querySelector('.email')
const phone = document.querySelector('.phone')
const Envoyer = document.querySelector('.Envoyer')
const afficher = document.querySelector('.afficher')




submit.addEventListener('click', (event) => {
    if (prénom.value =="") {
        afficher.innerHTML='<span>prénom est vide</span>';
        return;
    }
    else{
        afficher.innerHTML=""
    }
   
     if (email.value =="") {
        afficher.innerHTML='<span>email est vide</span>';
        return;
    } 
    else{
        afficher.innerHTML="" }

})

