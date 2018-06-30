//using old man java for loops and constructors
//deck class with an empty deck array, and an array to be filled with dealt cards
//constructor will create empty arrays for decks and delt hand
class Deck {
  constructor() {
    this.deck = [];
    this.dealt_cards = [];
  }
  //function to call when generating a randomized deck inside the instance of deck class
  generate_deck() {
    let card = (suit, value) => {
      this.name = value + " of " + suit;
      this.suit = suit;
      this.value = value;

        return { name: this.name, suit: this.suit, value: this.value };
    } //after taking in the variables name,suit,value it returns them in the form of an object
    //create array of values and suits to be used in the for loop
    let values = ["1","2","3","4","5","6","7","8","9","10","J","K","Q","A"];
    let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
      //s is set to 0 s is less that suits length then add s
      for (let s = 0; s < suits.length; s++) {
        for (let v = 0; v < values.length; v++) {
            this.deck.push(card(suits[s], values[v]))
       }
     } 

  }
  //if there are no cards in the deck message:
  //else loops c as index of each card while c is less than deck length
  log_deck () {
    if (this.deck.length == 0) {
      console.log('Deck not generated')
  
    } else {
      for (let c = 0; c < this.deck.length; c++) {
        console.log(this.deck[c])
      }

    }
  }
//create random index, returns floating point val * current_ind to establish new location for the card to move to
//subtrack 1 from current array index
//this is the current index after -1
//replace the card from current_ind to rand_ind location
//random location = the temp_val
  shuffle () {
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

}
let deck = new Deck()

deck.generate_deck()
console.log(this.deck)