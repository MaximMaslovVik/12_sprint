import {Card} from "./card.js";

export class CardList {
  constructor(container, api) {
    this.container = container;
    this.cards = [];
    this.api = api;
  }

  load() {
    this.api.getCards()
      .then(r => {
        this.cards = r;
        this.render();
      });
  }

  render() {
    this.cards.forEach(item => {
      const card = new Card(item.name, item.link);
      card.createCard(this.container);
    });
  }

  addCard(name, link) {
    const card = new Card(name, link);
    card.createCard(this.container);
  }
}
