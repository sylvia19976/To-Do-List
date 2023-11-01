const activities = [];

// Aggiungi un'attività alla lista
function addActivity(activity) {
    activities.push({
        id: Math.random().toString(36).substring(7),
        activity,
    });

    // Aggiorna la lista delle attività
    updateActivities();
}

// Aggiorna la lista delle attività
function updateActivities() {
    const ul = document.querySelector("ul.activities");
    ul.innerHTML = "";

    activities.forEach((activity) => {
        const li = document.createElement("li");
        li.classList.add("activity");
        li.innerHTML = `
            <input type="checkbox" id="${activity.id}">
            <label for="${activity.id}">${activity.activity}</label>
        `;
        ul.appendChild(li);
    });
}

// Avvia l'applicazione
document.addEventListener("DOMContentLoaded", () => {
    updateActivities();

    // Aggiungi un evento al pulsante per aggiungere un'attività
    document.querySelector("button").addEventListener("click", () => {
        activities.pop();
        addActivity(prompt("Inserisci un'attività"));
    });
});