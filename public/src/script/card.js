import {bigImagePopup} from "./script.js";


export class Card {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
  
    createAndAppendElement(parent, tag, className) {
      const element = document.createElement(tag);
      element.classList.add(className);
      parent.appendChild(element);
      return element;
    }
  
    createCard(parent) {
      const placeCard = this.createAndAppendElement(parent, 'div', 'place-card');
      const placeCardImage = this.createAndAppendElement(placeCard, 'div', 'place-card__image');
      const placeCardDeleteIcon = this.createAndAppendElement(placeCardImage, 'button', 'place-card__delete-icon');
      const placeCardDescription = this.createAndAppendElement(placeCard, 'div', 'place-card__description');
      const placeCardName = this.createAndAppendElement(placeCardDescription, 'h3', 'place-card__name');
      const placeCardLikeIcon = this.createAndAppendElement(placeCardDescription, 'button', 'place-card__like-icon');
      
		placeCardImage.setAttribute('style', `background-image: url(${this.link})`);
		  placeCardName.textContent = this.name;

		placeCardLikeIcon.addEventListener ('click', (event) => {
		  event.target.classList.toggle('place-card__like-icon_liked');
		});

		placeCardDeleteIcon.addEventListener('click', (event) => {       
		  event.stopPropagation();
		  parent.removeChild(placeCard);	   
		});

		placeCardImage.addEventListener('click', () => {
		  bigImagePopup.applyImage(this.link);
		  bigImagePopup.open();
		});

		this.placeCard = placeCard;
		}
  
    like() {
    }
  
    remove() {
    } 
  }
