// document.addEventListener('DOMContentLoaded', function() {
//     // Récupération du bouton "Ajouter" pour les nouvelles expériences
//     const addNewExpBtn = document.getElementById('btn-add-new-exp');

//     // Ajout d'un écouteur d'événement au clic sur le bouton "Ajouter"
//     addNewExpBtn.addEventListener('click', function() {
//         // Collecte des données des champs de saisie
//         const imgValue = document.getElementById('img-post').value;
//         const titleValue = document.getElementById('ti-post').value;
//         const dateDomainValue = document.getElementById('dtd-post').value;
//         const infoValue = document.getElementById('inf-post').value;
//         const etabValue = document.getElementById('etab-post').value;

//         // Utilisation des données collectées
//         console.log("Image:", imgValue);
//         console.log("Titre:", titleValue);
//         console.log("Date et domaine:", dateDomainValue);
//         console.log("Info:", infoValue);
//         console.log("Établissement:", etabValue);

//         // Vous pouvez maintenant utiliser ces valeurs pour ajouter une nouvelle expérience à votre contenu.
//     });
// });



document.addEventListener('DOMContentLoaded', function() {

// Sélection du bouton pour ajouter de nouvelles expériences
const addNewExpBtn = document.getElementById('btn-add-new-exp');

// Attacher un écouteur d'événement au clic sur le bouton
addNewExpBtn.addEventListener('click', function() {
    // Collecte des données des champs de saisie
    const imgValue = document.getElementById('img-post').value;
    const titleValue = document.getElementById('ti-post').value;
    const dateDomainValue = document.getElementById('dtd-post').value;
    const infoValue = document.getElementById('inf-post').value;
    const etabValue = document.getElementById('etab-post').value;

    // Validation des valeurs
    if (!imgValue || !titleValue || !dateDomainValue || !infoValue || !etabValue) {
        console.error("Tous les champs doivent être remplis.");
        return; // Arrête l'exécution si les champs ne sont pas remplis
    }

    // Création d'un nouvel élément div avec les données collectées
    const newItem = document.createElement('div');
    newItem.classList.add('w-dyn-item');
    newItem.innerHTML = `
        <div class="post-wrapper">
            <div class="post-content">
                <div class="w-row">
                    <div class="w-col w-col-4 w-col-medium-4">
                    <a href="#" style="background-image:url(https://pbs.twimg.com/profile_images/582603487768346624/dr0JWrl1_400x400.png)" class="blog-image w-inline-block"></a>
                    </div>
                    <div class="w-col w-col-8 w-col-medium-8">
                        <a href="#" class="blog-title-link w-inline-block">
                            <h2 class="blog-title">${titleValue}</h2>
                        </a>
                        <div class="details-wrapper">
                            <div class="post-info">${dateDomainValue}</div>
                            <div class="post-info">|</div>
                            <a href="#" class="post-info when-link">${infoValue}</a>
                        </div>
                        <div class="post-summary-wrapper">
                            <p class="post-summary">${etabValue}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Sélection du conteneur d'expériences et ajout du nouvel élément
    const expContainer = document.getElementById('expe-posts');
    expContainer.appendChild(newItem);
});


// Sélection du bouton pour ajouter de nouveaux diplômes d'éducation
const addNewEduBtn = document.getElementById('btn-add-new-edu');

// Attacher un écouteur d'événement au clic sur le bouton
addNewEduBtn.addEventListener('click', function() {
    // Collecte des données des champs de saisie pour le diplôme d'éducation
    const titleValue = document.getElementById('til-edu-post').value;
    const dateValue = document.getElementById('dtd-edu-post').value;

    // Validation des valeurs
    if (!titleValue || !dateValue) {
        console.error("Tous les champs doivent être remplis.");
        return; // Arrête l'exécution si les champs ne sont pas remplis
    }

    // Création d'un nouvel élément div avec les données collectées pour la version bureau
    const newItemDesktop = document.createElement('div');
    newItemDesktop.classList.add('w-dyn-item');
    newItemDesktop.innerHTML = `
        <a href="#" class="small-post-link">
            <img src="images/dip.png" width="25" alt=""> ${titleValue}
        </a>
        <div class="post-info">
            <p>Date : ${dateValue}</p>
        </div>
    `;

    // Ajout de l'élément au conteneur d'éducation pour la version bureau
    const eduContainerDesktop = document.getElementById('edu-posts');
    eduContainerDesktop.appendChild(newItemDesktop);

    // Création d'un nouvel élément div avec les données collectées pour la version mobile
    const newItemMobile = document.createElement('div');
    newItemMobile.classList.add('w-dyn-item');
    newItemMobile.innerHTML = `
        <a href="#" class="small-post-link">
            <img src="images/dip.png" width="25" alt=""> ${titleValue}
        </a>
        <div class="post-info">
            <p>Date : ${dateValue}</p>
        </div>
    `;

    // Ajout de l'élément au conteneur d'éducation pour la version mobile
    const eduContainerMobile = document.getElementById('edu-posts-mobile');
    eduContainerMobile.appendChild(newItemMobile);
});


});