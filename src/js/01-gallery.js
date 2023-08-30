import SimpleLightbox from "simpleLightBox";
import "simpleLightBox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery')

function createMarkup(arr) {
    return arr.map(({preview, original, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
 </li>`).join("");

}

gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));
 
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
      });

console.log(galleryItems);
