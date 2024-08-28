// let currentIndex = 0;
// const languages = document.querySelectorAll('.language');

// function showNextLanguage() {
//     // Cacher tous les éléments
//     languages.forEach(language => language.style.display = 'none');

//     // Afficher le prochain élément
//     languages[currentIndex].style.display = 'block';

//     // Passer à l'élément suivant
//     currentIndex = (currentIndex + 1) % languages.length;
// }

// // Afficher le premier élément immédiatement
// showNextLanguage();

// // Configurer l'intervalle pour changer les langues toutes les 2 secondes
// const intervalId = setInterval(showNextLanguage, 5000);




let currentIndex = 0; // Index actuel de la langue affichée
const languages = document.querySelectorAll('.language'); // Sélectionne tous les éléments avec la classe 'language'

function showNextLanguage() {
    // Cacher tous les éléments
    languages.forEach(language => {
        language.classList.remove('show'); // Supprime la classe 'show'
    });

    // Afficher le prochain élément
    languages[currentIndex].classList.add('show'); // Ajoute la classe 'show' pour l'élément actuel

    // Passer à l'élément suivant
    currentIndex = (currentIndex + 1) % languages.length; // Passe à l'élément suivant et revient au début si nécessaire
}

// Afficher le premier élément immédiatement
showNextLanguage();

// Configurer l'intervalle pour changer les langues toutes les 5 secondes
const intervalId = setInterval(showNextLanguage, 1500);
