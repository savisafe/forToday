
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

// МАССИВ ЗАДАЧ
let tasks = [

]

// СОЗДАНИЕ ЗАДАЧ
function createTask() {
    const input = document.getElementById('myText')
    const value = input.value
    const id = tasks.length
    tasks.push({value: value, id:id})
    input.value=''
}

// УДАЛЕНИЕ ЗАДАЧ
// function deleteTask(){
//     let del = tasks.filter(item=>{
//         if(item!==item.id)
//         return true;
//     })
//     console.log(del)
// }

// РЕНДЕР ЗАДАЧ + МОДАЛЬНОЕ ОКНО УДАЛЕНИЕ ЗАДАЧ + УДАЛЕНИЕ ЗАДАЧ
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
        const modalWinDelete = document.createElement('button')
        task.append(modalWinDelete)
        modalWinDelete.setAttribute('class', 'btn-delete')
        modalWinDelete.setAttribute('id', 'trash_'+item.id)
        out.append(task)

        // МОДАЛЬНОЕ ОКНО УДАЛЕНИЕ ЗАДАЧ
        modalWinDelete.addEventListener('click',()=>{
            const container = document.getElementById('container')
            container.setAttribute('class', 'display-none')
            const cover = document.getElementById('cover')
            cover.classList.remove('display-none')
            const btnNo = document.getElementById('task-delete-no')
            btnNo.addEventListener('click',()=>{
                const cover = document.getElementById('cover')
                cover.classList.add('display-none')
                const container = document.getElementById('container')
                container.classList.remove('display-none')
            })
        })

        // УДАЛЕНИЕ ЗАДАЧИ ЧЕРЕЗ FILTER
        tasks.forEach(item=>{
            const btnDeleteYes = document.getElementById('task-delete-yes')
            btnDeleteYes.addEventListener('click', ()=>{
                let del = tasks.filter(item=>{
                    let a = 0
                    if(a!==item.id)
                    return true;
                })
                btnDeleteYes.addEventListener('click',()=>{
                        // РЕНДЕР ДЛЯ УДАЛЕНИЯ ЗАДАЧИ
                        tasks.forEach(item=>{
                            task.classList.remove('task-container')
                            checkboxContainer.classList.remove( 'checkbox-container')
                            input.classList.remove( 'checkbox-input')
                            input.removeAttribute( 'checkbox')
                            label.classList.remove( 'checkbox-label')
                            label.classList.remove('checkbox_' + item.id)
                            taskText.classList.remove('task-text')
                            modalWinDelete.classList.remove( 'btn-delete')
                            modalWinDelete.classList.remove('trash_' + item.id)
                        })
                })

                console.log(tasks) //проверка массива
                console.log(del) //проверка удаления
            })
        })

    })
}

function onClickDone (){
    createTask()
    renderTask()
}

// УДАЛЕНИЕ ЗАДАЧИ
// function deleteTask() {
//     tasks.forEach(item => {
//         const index = tasks.indexOf(item, 0)
//         if (index !== -1) {
//             tasks.splice(index)
//             console.log(tasks)
//         }
//
//         const btnYes = document.getElementById('task-delete-yes')
//         btnYes.addEventListener('click',()=>{
//             const cover = document.getElementById('cover')
//             cover.classList.add('display-none')
//             const container = document.getElementById('container')
//             container.classList.remove('display-none')
//         })
//     })
// }
