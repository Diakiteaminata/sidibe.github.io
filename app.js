// Sélectionne tous les boutons "Ajouter au panier"
const ajouterPanierButtons = document.querySelectorAll('a[href="#panier"]');

// Ajoute un événement de clic à chaque bouton
ajouterPanierButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut


        
    const produitEl = event.target.closest('.product');
    const produitElement = produitEl.querySelector('.bdy');

        
    const produitNom = produitElement.querySelector('.name').textContent;
    const produitPrix = produitElement.querySelector('.price').textContent;
    const produitDesc = produitElement.querySelector('.desc').textContent;


      emailjs.send("service_1", "sidibe", {
        to_name:"G-Store",
        from_name:"G-Store-site",
        message:"Bonjour ! Nom du produit:"+produitNom+", Prix:"+produitPrix+", Description:"+produitDesc,

      }).then(
      (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
        );
  });
});



