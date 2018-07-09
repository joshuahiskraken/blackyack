//deck class with an empty deck array, and an array to be filled with dealt cards
//constructor will create empty arrays for decks and delt hand
const cards = (suit, value) => {
      
  this.name = value
   + " of " + suit;
  this.suit = suit;
  this.value = value;
  
    return { name: this.name, suit: this.suit, value: this.value, weight: weight(this.value)};
} 
//after taking in the variables name,suit,value it returns them in the form of an object
//create array of values and suits to be used forEach loops

let values = [1,2,3,4,5,6,7,8,9,10,"J","K","Q","A"];
let suits = ["♣️", "♦️", "♠️", "❤️"];
module.exports = class Deck {
  constructor() {
    this.deck = [];
    this.dealt_Playercards = [];
    this.dealt_Dealercards = [];
  }
//function to call when generating a randomized deck inside the instance of deck class
  generate_deck() {
//card function that defines what properties a card object should have then returns the object schema
values.forEach(value => {
  suits.forEach(suit => {
    this.deck.push(cards(suit, value))
  })
})
   
//iterate through each element and push to an array
  }
//Fisher-yates shuffle Algo https://bost.ocks.org/mike/shuffle/
shuffle_deck = function () {
  let m = deck.length,
    t,
    i;

  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
};

shuffle_deck();

  deal () {
    let dealt_card = this.deck.shift() 
    this.dealt_cards.push(dealt_card) 
    return dealt_card
    
  }

  dealplayerCards () {
   let top = this.deck.shift()
   let bottom = this.deck.pop()
   this.dealt_Playercards.push(top,bottom)
   
   
  }
  dealdealerCards () {
    let top = this.deck.shift()
    let bottom = this.deck.pop()
    this.dealt_Dealercards.push(top,bottom)
  }

}

