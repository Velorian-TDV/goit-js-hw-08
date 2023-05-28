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
        localStorage.setItem('feedback-form-state', JSON.stringify(objetctForStorage))

    } else if (data.target.type === 'textarea') {

        objetctForStorage.message = data.target.value;
        localStorage.setItem('feedback-form-state', JSON.stringify(objetctForStorage))

    }

}

window.addEventListener('load', () => {

    if (localStorage.getItem('feedback-form-state') !== null) {
        
        const dataFromStorage = JSON.parse(localStorage.getItem('feedback-form-state'))

        emailInput.value = dataFromStorage.email;
        messageInput.value = dataFromStorage.message;

    }

})

form.addEventListener('input', throttleData)

form.addEventListener('submit', () => localStorage.clear())