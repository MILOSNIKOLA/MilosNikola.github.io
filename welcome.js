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
// setInterval(showNextLanguage, 2000);





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
// setInterval(showNextLanguage, 2000);

// function translatePage(language) {
//     const content = document.getElementById('content');
//     const elements = content.querySelectorAll('[data-en], [data-fr], [data-sr]');
    
//     elements.forEach(element => {
//         const translation = element.getAttribute(`data-${language}`);
//         if (translation) {
//             element.textContent = translation;
//         }
//     });
// }







let currentIndex = 0;
const languages = document.querySelectorAll('.language');

function showNextLanguage() {
    // Cacher tous les éléments
    languages.forEach(language => language.style.display = 'none');

    // Afficher le prochain élément
    languages[currentIndex].style.display = 'block';

    // Passer à l'élément suivant
    currentIndex = (currentIndex + 1) % languages.length;
}

// Afficher le premier élément immédiatement
showNextLanguage();

// Configurer l'intervalle pour changer les langues toutes les 2 secondes
const intervalId = setInterval(showNextLanguage, 3000);

function selectLanguage(language) {
    // Arrêter le défilement automatique
    clearInterval(intervalId);

    // Cacher toutes les div de langue
    languages.forEach(lang => lang.style.display = 'none');
    
    // Afficher seulement la div de langue sélectionnée
    document.getElementById(language).style.display = 'block';

    // Traduire le contenu de la page
    translatePage(language);
}

function translatePage(language) {
    const content = document.getElementById('content');
    const elements = content.querySelectorAll('[data-en], [data-fr], [data-sr]');
    
    elements.forEach(element => {
        const translation = element.getAttribute(`data-${language}`);
        if (translation) {
            element.textContent = translation;
        }
    });
}