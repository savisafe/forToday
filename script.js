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