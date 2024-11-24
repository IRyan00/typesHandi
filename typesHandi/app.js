fetch('./handicap.json') // Charger le fichier JSON 
    .then(response => response.json()) // Convertir en objet JavaScript  
    .then(data => {
        console.log(data); // Vérifier les données dans la console      
        afficherHandicaps(data); // Appeler une fonction pour traiter les données  
    })
    .catch(error => console.error('Erreur de chargement:', error));
function afficherHandicaps(handicaps) {
    const liste = document.getElementById('liste-handicaps');
    handicaps.forEach(handicap => {
        const item = document.createElement('li');
        item.textContent = handicap.type;
        item.addEventListener('click', () => afficherDetails(handicap));
        liste.appendChild(item);
    });
} function afficherDetails(handicap) {
    const details = document.getElementById('details-handicap');
    details.innerHTML = `        
                <h2>${handicap.type}</h2>        
                <p>${handicap.description}</p>        
                <h3>Solutions :</h3>        
                <ul>${handicap.solutions.map(sol => `<li>${sol}</li>`).join('')}</ul>    `;
}