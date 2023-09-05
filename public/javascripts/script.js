let spinContainer = document.getElementById('spinner-container')


let button = document.getElementById('generateButton')

button.addEventListener('click', () => {
    let form1 = document.getElementById('animalInput')
    let form2 = document.getElementById('stateInput')
    if (form1.value.length > 0 && form2.value.length > 0) {
        spinContainer.style.display = 'block'
    }
})