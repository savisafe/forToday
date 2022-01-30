
// КНОПКА КОРЗИНЫ
const cover = document.getElementById('trash')
cover.addEventListener('click', () => {
    const cover = document.getElementById('cover')
    cover.classList.remove('display-none')
    const container = document.getElementById('container')
    container.classList.add('display-none')
})

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
    const taskNew = document.getElementById('taskNew')
    taskNew.classList.remove('display-none')
})

// КНОПКА "CANCEL"
const cancel = document.getElementById('cancel')
cancel.addEventListener('click', () => {
    const taskNew = document.getElementById('taskNew')
    taskNew.classList.add('display-none')
    const container = document.getElementById('container')
    container.classList.remove('display-none')
})

// ЗАЧЁРКНУТЫЙ ТЕКСТ, КОГДА ЗАДАЧА ВЫПОЛНЕНА
const taskDelete = document.getElementById('taskDelete')
taskDelete.addEventListener('click', () => {
    const addClass = document.getElementById('addClass')
    addClass.classList.add('task-text-completed')
})