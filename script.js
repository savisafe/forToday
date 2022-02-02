
// СОЗДАНИЕ ЗАДАЧИ, ЭКРАН 2
function getTxt() {

    // КНОПКА "DONE"
    function btnDone() {
        const done = document.getElementById('done')
        const inputCheck = document.querySelector('.text-input');
        done.setAttribute('disabled', 'true')

        if (inputCheck.value.length > 5) {
            done.removeAttribute('disabled')
            done.classList.remove('btn-done-off')
            done.classList.add('btn-done-on')
        }

        done.addEventListener('click', () => {
            const removeDisplay = document.getElementById('taskNewBtn')
            removeDisplay.classList.add('display-none')
            const addDisplay = document.getElementById('container')
            addDisplay.classList.remove('display-none')
            console.log(done)
        })
    }
    btnDone()

    const value = document.getElementById('myText').value;
    const out = document.getElementById('taskContainer')

    const taskContainer = document.createElement('div')
    taskContainer.setAttribute('class', 'task-container')

    const checkboxContainer  = document.createElement('div')
    checkboxContainer.setAttribute('class', 'checkbox-container')
    checkboxContainer.setAttribute('id', 'taskDelete')
    const input = document.createElement('input')
    input.setAttribute('class', 'checkbox-container')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', 'checkbox_1')
    const label = document.createElement('label')
    label.setAttribute('class', 'checkbox-label')
    label.setAttribute('for', 'checkbox_1')
    checkboxContainer.append(input, label)

    const taskText = document.createElement('div')
    taskText.setAttribute('class', 'task-text')
    taskText.setAttribute('id', 'addClass') //
    taskText.append(value)

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'btn-delete')
    btnDelete.setAttribute('id', 'trash')

    taskContainer.append(checkboxContainer, taskText, btnDelete)

    out.append(taskContainer)

    // КНОПКА КОРЗИНЫ
    const cover = document.getElementById('trash')
    cover.addEventListener('click', () => {
        const cover = document.getElementById('cover')
        cover.classList.remove('display-none')
        const container = document.getElementById('container')
        container.classList.add('display-none')
    })

    // ЗАЧЁРКНУТЫЙ ТЕКСТ, КОГДА ЗАДАЧА ВЫПОЛНЕНА
    const taskDelete = document.getElementById('taskDelete')
    taskDelete.addEventListener('click', () => {
        const addClass = document.getElementById('addClass')
        addClass.classList.add('task-text-completed')
    })
}

// КНОПКА "CANCEL"
const cancel = document.getElementById('cancel')
cancel.addEventListener('click', () => {
    const taskNew = document.getElementById('taskNewBtn')
    taskNew.classList.add('display-none')
    const container = document.getElementById('container')
    container.classList.remove('display-none')
})

// КНОПКА "DONE"
// function btnDone() {
//     const done = document.getElementById('done')
//     const inputCheck = document.querySelector('.text-input');
//     done.setAttribute('disabled', 'true')
//
//     if (inputCheck.value.length > 5) {
//         done.removeAttribute('disabled')
//         done.classList.remove('btn-done-off')
//         done.classList.add('btn-done-on')
//     }
//
//     done.addEventListener('click', () => {
//         const removeDisplay = document.getElementById('taskNewBtn')
//         removeDisplay.classList.add('display-none')
//         const addDisplay = document.getElementById('container')
//         addDisplay.classList.remove('display-none')
//         console.log(done)
//     })
// }



// МОДАЛКА "ДА"

// МОДАЛКА "НЕТ"
const btnCard = document.getElementById('btn-card-no')
btnCard.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.classList.remove('display-none')
    const cover = document.getElementById('cover')
    cover.classList.add('display-none')
})

// КНОПКА "+"
const addTask = document.getElementById('addTask')
addTask.addEventListener('click', () => {
    const container = document.getElementById('container')
    container.classList.add('display-none')
    const taskNew = document.getElementById('taskNewBtn')
    taskNew.classList.remove('display-none')
})



