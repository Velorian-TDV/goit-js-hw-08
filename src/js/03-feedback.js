import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const throttleData = throttle(dataToStorage, 500);
const objetctForStorage = {
    email: '',
    message: '',
}

function dataToStorage(data) {

    if (data.target.type === 'email') {

        objetctForStorage.email = data.target.value;
        saveToStorage()

    } else if (data.target.type === 'textarea') {

        objetctForStorage.message = data.target.value;
        saveToStorage()
    
    }

}

function saveToStorage() {
    localStorage.setItem('feedback-form-state', JSON.stringify(objetctForStorage));
}

window.addEventListener('load', () => {

    if (localStorage.getItem('feedback-form-state') !== null) {
        
        const dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'))

        emailInput.value = dataFromStorage.email;
        messageInput.value = dataFromStorage.message;

        objetctForStorage.email = dataFromStorage.email;
        objetctForStorage.message = dataFromStorage.message;

    }

})

form.addEventListener('input', throttleData)

form.addEventListener('submit', (event) => {

    event.preventDefault()

    const dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'))
    
    console.log(dataFromStorage)
    
    emailInput.value = '';
    messageInput.value = '';

    localStorage.removeItem('feedback-form-state');

})