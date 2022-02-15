
// КНОПКА +
const onClick = document.getElementById('btn-to-go-second-display')
onClick.addEventListener('click', ()=>{
    const offGeneralDisplay = document.getElementById('container')
    offGeneralDisplay.classList.add('display-none')
    const displayNewTask = document.getElementById('display-new-task')
    displayNewTask.classList.remove('display-none')
    const input = document.getElementById('myText')
    input.value=''
    let cleanEventListener = () => { //чистим Event Listener
        onClick.removeEventListener('click', cleanEventListener)
    }
    onClick.addEventListener('click', cleanEventListener)
})

// КНОПКА CANCEL
const cancel = document.getElementById('cancel')
cancel.addEventListener('click', ()=>{
    const offDisplayNewTask = document.getElementById('display-new-task')
    offDisplayNewTask.classList.add('display-none')
    const returnGeneralDisplay = document.getElementById('container')
    returnGeneralDisplay.classList.remove('display-none')
})

const done = document.getElementById('done')
done.setAttribute('disabled', 'true')
done.addEventListener('click', ()=>{
    const offDisplayNewTask = document.getElementById('display-new-task')
    offDisplayNewTask.classList.add('display-none')
    const returnGeneralDisplay = document.getElementById('container')
    returnGeneralDisplay.classList.remove('display-none')
    done.setAttribute('disabled', 'true')
    })


// УСЛОВИЯ ИНПУТА
const onInput = document.getElementById('myText')
onInput.addEventListener('input',()=>{
    if(onInput.value.length > 0){
        done.removeAttribute('disabled')
        done.setAttribute('class', 'btn-done-on')
    }
})

// МАССИВ ЗАДАЧ
let tasks = [

]

// СОЗДАНИЕ ЗАДАЧ
function createTask() {
    const input = document.getElementById('myText')
    const value = input.value
    const id = tasks.length
    tasks.push({value: value, id:id})
}

// РЕНДЕР ЗАДАЧ
function renderTask() {
    const out = document.getElementById('tasksContainer')
    out.innerHTML = ''
    tasks.forEach(item => {
        const task = document.createElement('div')
        task.setAttribute('class', 'task-container')
        task.setAttribute('id', 'task-id' + item.id)
        const checkboxContainer = document.createElement('div')
        checkboxContainer.setAttribute('class', 'checkbox-container')
        checkboxContainer.setAttribute('id', 'taskDelete' + item.id)
        task.append(checkboxContainer)
        const input = document.createElement('input')
        checkboxContainer.append(input)
        input.setAttribute('class', 'checkbox-input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', 'checkbox_' + item.id)
        const label = document.createElement('label')
        label.setAttribute('id', 'label' + item.id)
        checkboxContainer.append(label)
        label.setAttribute('class', 'checkbox-label')
        label.setAttribute('for', 'checkbox_' + item.id)
        const taskText = document.createElement('div')
        taskText.setAttribute('class', 'task-text')
        taskText.setAttribute('id', 'addText' + item.id)
        taskText.append(item.value)
        task.append(taskText)
        const btnChange = document.createElement('button')
        btnChange.setAttribute('class', 'btn-change')
        btnChange.setAttribute('id', 'change_' + item.id)
        btnChange.setAttribute('onclick', 'changeTask()')
        btnChange.addEventListener('click', ()=>{
            const offGeneralDisplay = document.getElementById('container')
            offGeneralDisplay.classList.add('display-none')
            const displayNewTask = document.getElementById('display-new-task')
            displayNewTask.classList.remove('display-none')
        })
        const modalWinDelete = document.createElement('button')
        modalWinDelete.setAttribute('class', 'btn-delete')
        modalWinDelete.setAttribute('id', 'trash_' + item.id)

        task.append(btnChange, modalWinDelete)
        out.append(task)

        // МОДАЛЬНОЕ ОКНО УДАЛЕНИЕ ЗАДАЧ
        modalWinDelete.addEventListener('click', () => {
            const container = document.getElementById('container')
            container.setAttribute('class', 'display-none')
            const cover = document.getElementById('cover')
            cover.classList.remove('display-none')
            const btnNo = document.getElementById('task-delete-no')
            btnNo.addEventListener('click', () => {
                cover.classList.add('display-none')
                container.classList.remove('display-none')
            })
            const btnYes = document.getElementById('task-delete-yes')
            let onClick = () => {
                deleteTask(item.id)
                cover.classList.add('display-none')
                container.classList.remove('display-none')
                btnYes.removeEventListener('click', onClick)
                console.log(item.id)
            }
            btnYes.addEventListener('click', onClick)
        })

    })
}

// УДАЛЕНИЕ ЗАДАЧИ
function deleteTask(id) {
    console.log(tasks)
    tasks = tasks.filter(item=>{
        if(id!==item.id)
            return true;
    })
    renderTask()
}

function changeTask() {
    const input = document.getElementById('myText')
    input.value

}



function onClickDone (){
    createTask()
    renderTask()
}