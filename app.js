let Deck = require('./src/decklib')
let Players = require('./src/playerArrays')
let player = [];
let dealer = [];

Deck = new Deck()
Deck.generate_deck()
Deck.shuffle_deck()

Deck.dealplayerCards()
Deck.dealt_Playercards.forEach(function(elem, index) {
    Deck.dealt_Playercards.splice(index, 0);
    player.push(elem);
  });
  
Deck.dealdealerCards()
Deck.dealt_Dealercards.forEach(function(card, index) {
    Deck.dealt_Dealercards.splice(index, 0);
    dealer.push(card);
  });




console.log(Deck.dealt_Dealercards)
console.log(dealer)