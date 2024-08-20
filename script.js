function getRandomColour() {
    const colours = ["#FAFACE", "#D4D0F5", "#FDF9E0", "#CCF3F1", "#D1E9CF"];
    const randomIndex = Math.floor(Math.random() * colours.length);
    return colours[randomIndex];
}

//Write your code here
const addNotes = () =>  {

    // Storing User Input
    let noteText = document.getElementById('new-note').value;

    // Preventing Empty Notes
    if (!noteText) {
        alert("Write something first in order to create a notes.")
        return;
    }

    // Creating Div For Each noteCard
    const noteCard = document.createElement('div');
    noteCard.classList.add('sticky-note');
    noteCard.style.backgroundColor = getRandomColour();

    // Creating DeleteButton
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', () => {
        noteCard.remove();
    });

    // Creating P Tag 
    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;

    // Appending deleteButton to noteCard
    noteCard.appendChild(deleteButton);

    // Appending noteContent to the noteCard
    noteCard.appendChild(noteContent);

    // Appending noteCard 
    document.querySelector('.sticky-notes').appendChild(noteCard);

    // Clearing the textarea 
    document.getElementById('new-note').value = ""
}

// Adding eventListener to the add button
document.querySelector('.add-button').addEventListener('click', addNotes);