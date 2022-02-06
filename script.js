
// КНОПКА +
const onClick = document.getElementById('btn-to-go-second-display')
onClick.addEventListener('click', ()=>{
    const offGeneralDisplay = document.getElementById('container')
    offGeneralDisplay.classList.add('display-none')
    const displayNewTask = document.getElementById('display-new-task')
    displayNewTask.classList.remove('display-none')
    const input = document.getElementById('myText').innerHTML=''
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

const tasks = [

]

function createTask() {
    const input = document.getElementById('myText')
    const value = input.value
    const id = tasks.length
    tasks.push({value: value, id:id})
    input.value=''
}

function renderTask() {
    const out = document.getElementById('tasksContainer')
    out.innerHTML=''
    tasks.forEach(item => {
        const task = document.createElement('div')
        task.setAttribute('class', 'task-container')
        const checkboxContainer = document.createElement('div')
        task.append(checkboxContainer)
        checkboxContainer.setAttribute('class','checkbox-container')
        const input = document.createElement('input')
        checkboxContainer.append(input)
        input.setAttribute('class', 'checkbox-input')
        input.setAttribute('type', 'checkbox')
        input.setAttribute('id', 'checkbox_'+item.id)
        const label = document.createElement('label')
        checkboxContainer.append(label)
        label.setAttribute('class', 'checkbox-label')
        label.setAttribute('for','checkbox_'+item.id)
        const taskText = document.createElement('div')
        task.append(taskText)
        taskText.setAttribute('class','task-text')
        taskText.append(item.value)
        const btnDelete = document.createElement('button')
        task.append(btnDelete)
        btnDelete.setAttribute('class', 'btn-delete')
        btnDelete.setAttribute('id', 'trash_'+item.id)
        out.append(task)
        console.log(tasks)
        console.log(item)
    })
}

function onClickDone (){
    createTask()
    renderTask()
}