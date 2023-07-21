const addbtn = document.getElementById('add')
const updateLocalStorageData = () => {
    const textAreaData = document.querySelectorAll('textarea')
    const notesArray = []
    // console.log(textAreaData);

    textAreaData.forEach((note) => {
        return notesArray.push(note.value)
    })

    localStorage.setItem('notesArray', JSON.stringify(notesArray))
}
const addNewNote = (text = '') => {
    const note = document.createElement('div')
    note.classList.add('note');
    const htmldata = `<div class="tool">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>`

    note.insertAdjacentHTML('afterbegin', htmldata)

    // getting the references
    const editbtn = note.querySelector('.edit')
    const delbtn = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    // toggle using edit button
    

    // adding event
    editbtn.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden')
        textArea.classList.toggle('hidden')
    })



    textArea.addEventListener('change', (event) => {
        const value = event.target.value
        mainDiv.innerHTML = value

        updateLocalStorageData()
    })

    // delete event
    delbtn.addEventListener('click', () => note.remove())


    document.body.appendChild(note)

}

// getting data from localStorage
const notes = JSON.parse(localStorage.getItem('notesArray'))
if (notesArray) {
    notesArray.forEach((note) => {
        addNewNote(note)
    })
}


addbtn.addEventListener('click', () => addNewNote())