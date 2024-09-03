const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const response = document.querySelector('p');
// const boxx = document.getSelection('box')

// Nombre initial d'essais
let remainingAttempts = 3;

// Fonction pour afficher la mauvaise réponse
function handleWrongAnswer() {
    remainingAttempts--; // Décrémenter les essais restants

    if (remainingAttempts > 0) {
        response.classList.add('show-response');
        response.classList.add('responsewrong');
        response.style.background = 'red';
        questionContainer.style.border = '6px dashed red';
        response.innerText = `Mauvaise réponse ! Essais restants : ${remainingAttempts}`;
    } else {
        response.classList.add('show-response');
        response.style.background = 'red';
        response.innerText = 'Nombre maximum d\'essais atteint ! La bonne réponse est : Paris';
        // Désactiver les boutons incorrects après 3 essais
        wrongButtons.forEach(button => button.disabled = true);
        // Ajouter une bordure en pointillés rouge autour de questionContainer
        questionContainer.style.border = '6px solid red';
    }
}

// Ajout de l'événement pour la bonne réponse
btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.background = 'green';
    response.innerText = 'Bonne réponse !';
    // Ajouter une bordure en pointillés verte autour de questionContainer
    questionContainer.style.border = '6px dashed green';
    // Réinitialiser les essais restants si la réponse est correcte
    remainingAttempts = 3;
});

// Ajout des événements pour les mauvaises réponses
const wrongButtons = [btn2, btn3, btn4];
wrongButtons.forEach(button => {
    button.addEventListener('click', handleWrongAnswer);
});

// Ajout de l'événement pour le conteneur de la question
questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('question-clicked');
    questionContainer.classList.add('erreur');
});