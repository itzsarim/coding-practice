const suitNormal = ['Diamond', 'Club', 'Spade', 'Heart'];
const numberNormal = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

class CardDeck {
    constructor(type) {
        let card = new Card();
        let cardDefinition = card.getCardDefinition(type);
        this.cards = [];
        cardDefinition.suit.forEach( suit => {
            cardDefinition.number.forEach( number => {
                this.cards.push(new Card(number, suit));
            })
        });
    }

    getCards() {
        return this.cards;
    }

    cardShuffle() {
        let shuffle = (cards) => {
            let temp;
            let randomNumber;
            for(let i=cards.length-1; i>=0; i--) {
                randomNumber = Math.floor((cards.length) * Math.random());
                temp = cards[i];
                cards[i] = cards[randomNumber];
                cards[randomNumber] = temp;
            }
            return cards;
        }

        return shuffle(this.cards);
    }

    dealOneCard() {
        let randomNumber = Math.floor((this.cards.length) * Math.random());
        return this.cards[randomNumber];
    }
}

class Card {
    constructor(number, suit) {
        this.number = number;
        this.suit = suit;
    }

    getCardDefinition(type) {
        switch(type)  {
            case 'normal':
                return {suit: suitNormal, number: numberNormal};
                break;
            default:
                return {suit: suitNormal, number: numberNormal};   
        }
    }
}

let cards = new CardDeck('normal');
//console.log('shuffled cards in the deck', cards.cardShuffle());
console.log('you get this card', cards.dealOneCard());