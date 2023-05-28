// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox'

const gallery = document.querySelector('.gallery');
const arrayForImages = [];

// create element function
function createElement(preview, original, alt,) {
    return (`
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${alt}" />
        </a>
    </li>
    `);
}

// create gallary function
const createGallery = galleryItems.map(elem => {

    arrayForImages.push(elem.original);

    return (
        createElement(elem.preview, elem.original, elem.description)
    )

})

// create preview gallery
gallery.insertAdjacentHTML('beforeend', createGallery.join(''));

let carosel = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});

carosel.on('error.simplelightbox', function (e) {
    console.log(e);
});