let Players = require('./playerArrays')
//deck class with an empty deck array, and an array to be filled with dealt cards
//constructor will create empty arrays for decks and delt hand
module.exports = class Deck {
  constructor() {
    this.deck = [];
    this.dealt_Playercards = [];
    this.dealt_Dealercards = [];
  }
//function to call when generating a randomized deck inside the instance of deck class
  generate_deck() {
//card function that defines what properties a card object should have then returns the object schema
    let card = (suit, value) => {
      this.name = value + " of " + suit;
      this.suit = suit;
      this.value = value;

        return { name: this.name, suit: this.suit, value: this.value };
    } 
//after taking in the variables name,suit,value it returns them in the form of an object
//create array of values and suits to be used forEach loops
    let values = ["1","2","3","4","5","6","7","8","9","10","J","K","Q","A"];
    let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
//iterate through each element and push to an array
      values.forEach(value => {
        suits.forEach(suit => {
          this.deck.push(card(suit,value))
        })
      })

  }
//create random index, returns floating point val * current_ind to establish new location for the card to move to
//subtrack 1 from current array index
//this is the current index after -1
//replace the card from current_ind to rand_ind location
//random location = the temp_val
  shuffle_deck () {
    let current_ind = this.deck.length, temp_val, rand_ind
    
    while (0 != current_ind) {
        rand_ind = Math.floor(Math.random() * current_ind) 
        current_ind -= 1 
        temp_val = this.deck[current_ind] 
        this.deck[current_ind] = this.deck[rand_ind] 
        this.deck[rand_ind] = temp_val 
    }
  }
//remove top card from array
//push dealt card to our empty dealt_cards[]
//return the dealt_card
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
/*
let deck = new Deck()

deck.generate_deck()
deck.shuffle()
deck.deal()*/