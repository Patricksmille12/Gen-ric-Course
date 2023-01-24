function handleModal(){
    const button = document.querySelector('#showModal')
    const modal = document.querySelector('.modal')

    button.addEventListener('click', () => {
        modal.showModal()

        closeModal()
    })
}

function closeModal(){
    const button = document.querySelector('.close')
    const modal = document.querySelector('.modal')

    button.addEventListener('click', () => {
        modal.close()
    })
}

handleModal()