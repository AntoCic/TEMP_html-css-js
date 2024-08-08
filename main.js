console.log("- START -");

console.log("- START -");

let deferredPrompt;

// Ascolta l'evento beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
    // Previeni la visualizzazione della prompt di default
    e.preventDefault();
    // Salva l'evento per poterlo utilizzare più tardi
    deferredPrompt = e;
    // Mostra il pulsante di installazione
    const installButton = document.getElementById('installButton');
    installButton.style.display = 'block';

    installButton.addEventListener('click', () => {
        // Nascondi il pulsante
        installButton.style.display = 'none';
        // Mostra il prompt di installazione
        deferredPrompt.prompt();
        // Controlla la scelta dell'utente
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('L\'utente ha accettato l\'installazione');
            } else {
                console.log('L\'utente ha rifiutato l\'installazione');
            }
            deferredPrompt = null;
        });
    });
});

// Controlla se la PWA è già stata installata
window.addEventListener('appinstalled', () => {
    console.log('PWA installata');
});