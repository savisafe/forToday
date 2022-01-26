const trash = document.getElementById('trashOn')

function trashOn () {
    const out = document.getElementById('outQuestion')
    const cover = document.createElement('div')
    cover.setAttribute('class', 'container__cover')

    const question = document.createElement('div')
    question.setAttribute('class', 'container__question ')
    question.append('Вы действительно хотите удалить задачу?')

    const containerBtn = document.createElement('div')
    containerBtn.setAttribute('class', 'containerBtn')
    const btnYes = document.createElement('button')
    btnYes.setAttribute('class', 'question__btn__yes')
    btnYes.append('Да')

    const btnNo = document.createElement('button')
    btnNo.setAttribute('class', 'question__btn__no')
    btnNo.append('Нет')

    cover.append(question)
    question.append(containerBtn)
    containerBtn.append(btnYes,btnNo)
    out.appendChild(cover)
    console.log('click')
}

trash.addEventListener('click', trashOn)

const task = document.getElementById('addTask')

function addTask () {
    const displayNone = document.getElementById('none')
    displayNone.setAttribute('class', 'container__none')

    const out = document.getElementById('outTask')

    const containerNew = document.createElement('div')
    containerNew.setAttribute('class', 'container__new')

    const position = document.createElement('div')
    position.setAttribute('class', 'btn__position')
    const btnCancel = document.createElement('button')
    btnCancel.setAttribute('class', 'container__btn')
    btnCancel.append('Cancel')
    const btnDone = document.createElement('button')
    btnDone.setAttribute('class', 'container__btn')
    btnDone.append('Done')
    position.append(btnCancel, btnDone)

    const checkbox = document.createElement('div')
    checkbox.setAttribute('class', 'checkbox')
    const input = document.createElement('input')
    input.setAttribute('class', 'checkbox__input')
    input.setAttribute('type', 'checkbox')
    input.setAttribute('id', 'checkbox_1')
    const label = document.createElement('label')
    label.setAttribute('class', 'checkbox__label')
    label.setAttribute('for', 'checkbox_1')
    checkbox.append(input,label)

    const p = document.createElement('p')
    p.setAttribute('class', 'container__New__input')
    const inputB = document.createElement('input')
    inputB.setAttribute('class', 'container__New__position')
    inputB.setAttribute('size', '22')
    inputB.setAttribute('placeholder', 'What do you want to do?')
    p.append(inputB)

    const container = document.createElement('div')
    container.setAttribute('class', 'checkboxNew_position')
    container.append(checkbox, p)

    out.append(containerNew, position, container)
    console.log('click')
}

task.addEventListener('click', addTask)