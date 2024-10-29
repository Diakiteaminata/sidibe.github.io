function sendEmail(productName, productPrice) {
  const templateParams = {
    product: productName,
    price: productPrice,
    message: `Commande pour le produit ${productName} au prix de ${productPrice} FCFA.`
  };

  console.log(templateParams); // Affiche les paramètres du modèle dans la console

  emailjs.send('service_1', 'sidibe', templateParams)
    .then(function(response) {
      alert('Commande envoyée avec succès !');
      console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
      alert('Échec de l\'envoi de la commande. Veuillez réessayer.');
      console.error('FAILED...', error);
    });
}
