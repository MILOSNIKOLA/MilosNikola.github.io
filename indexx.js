const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const response = document.querySelector('p');
const start = document.querySelector('.button');

const hidden = document.querySelector('.boite')
const boksi = document.getSelection('.box')

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

// const wrongButtons = [btn2, btn3, btn4];
// wrongButtons.forEach(button => {
//     button.addEventListener('click', handleWrongAnswer);

const wrongButtons = [btn2, btn3, btn4];
wrongButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleWrongAnswer();
        button.disabled = true; // Désactive le bouton après un clic
    });
});

// });

// Ajout de l'événement pour le conteneur de la question
questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('question-clicked');
    questionContainer.classList.add('erreur');
    
});

// setTimeout(() => {
//     // Faire disparaître la première div en utilisant l'opacité
//     document.getSelection('containerr').style.opacity = '0';
//     // console.log(containerr);
    
    
//     // Faire apparaître la deuxième div en utilisant l'opacité
//     document.getSelection('clickEventBox').style.opacity = '1';

//     // Après la transition (1s), cacher complètement la première div
//     setTimeout1(() => {
//         document.getSelection('containerr').style.display = 'none';
//     }, 5000); // 1000 millisecondes = 1 seconde, correspond à la durée de la transition
// }, 5000); // 5000 millisecondes = 5 secondes

// function yes(params) {
    
// }

setTimeout(() => {
    questionContainer.style.display = 'none';
    
})

start.addEventListener('click', () => {
    start.classList.add('starttt');
    hidden.style.display = 'block';
    // start.style.display = 'none'
    // start.disabled = true;
})

hidden.addEventListener('click', () => {
    hidden.style.display = 'block';
    setTimeout(function() {
        document.querySelector('.boite').classList.add('boite');
    }, 3000);

    setTimeout(() => {
        questionContainer.style.display = 'block'; // Rendre le questionContainer visible à nouveau
        questionContainer.style.opacity = '1'; // S'assurer qu'il est visible
    }, 3000); // Délai de 3 secondes avant de réafficher

    // setTimeout(() => {
    //     questionContainer.style.display = 'block'; // Rendre le questionContainer visible
    //     questionContainer.style.border = ''; // Réinitialiser la bordure si nécessaire
    //     response.classList.remove('show-response'); // Masquer la réponse
    //     response.innerText = ''; // Réinitialiser le texte
    // }, 3000); // Délai de 3 secondes avant de réafficher
});



// .display = 'none';

// questionContainer.addEventListener('', () => {
//     questionContainer.add('question-clicked');
//     questionContainer.style.display = 'block';
// });






