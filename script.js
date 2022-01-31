
// СОЗДАНИЕ ЗАДАЧИ, ЭКРАН 2
function getTxt() {
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
    input.setAttribute('id', 'checkbox_1') //как будет работать?????????????????
    const label = document.createElement('label')
    label.setAttribute('class', 'checkbox-label')
    label.setAttribute('for', 'checkbox_1')
    checkboxContainer.append(input, label)

    const taskText = document.createElement('div')
    taskText.setAttribute('class', 'task-text')
    taskText.setAttribute('id', 'addClass') //как сюда добавить value????
    taskText.append(value)

    const btnDelete = document.createElement('button')
    btnDelete.setAttribute('class', 'btn-delete')
    btnDelete.setAttribute('id', 'trash')

    taskContainer.append(checkboxContainer, taskText, btnDelete)

    out.append(taskContainer)

    console.log(value);

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

// КНОПКА "CANCEL"
const cancel = document.getElementById('cancel')
cancel.addEventListener('click', () => {
    const taskNew = document.getElementById('taskNewBtn')
    taskNew.classList.add('display-none')
    const container = document.getElementById('container')
    container.classList.remove('display-none')
})

// КНОПКА "DONE"
const done = document.getElementById('done')
done.addEventListener('click', () => {
    const removeDisplay = document.getElementById('taskNewBtn')
    removeDisplay.classList.remove('task-new')
    const addDisplay = document.getElementById('container')
    addDisplay.classList.add('container')
})
