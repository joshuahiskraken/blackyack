var readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let deck = [];
let Playerdeck = [];
let Dealerdeck = [];
let playerWeight = 0;
let dealerWeight = 0;

//create array of values and suits to be used forEach loops
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
let suits = ["♣️", "♦️", "♠️", "❤️"];
//card function that defines what properties a card object should have then returns the object schema
//after taking in the variables name,suit,value it returns them in the form of an object
const cards = (value, suit) => {
  this.name = value + " " + "of" + " " + suit;
  this.value = value;
  this.suit = suit;
  //establishing number values for suits
  if (this.value === "J" || this.value == "Q" || this.value === "K") {
    return { value: 10, name: this.name };
  } else if (this.value === "A") {
    return { value: 11, name: this.name };
  } else {
    return { value: this.value, name: this.name };
  }
};
//card creation pushed to deck array
values.forEach(value => {
  suits.forEach(suit => {
    deck.push(cards(value, suit));
  });
});
//create random index, returns floating point val * current_ind to establish new location for the card to move to
//subtrack 1 from current array index
//this is the current index after -1
//replace the card from current_ind to rand_ind location
//random location = the temp_val
//https://bost.ocks.org/mike/shuffle/
//Using Fisher-Yates shuffle algo, picked it up from the internets, but an explaination of how it works above
//implement
let shuffle_deck = function() {
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

//deal player cards by shifting one from top and popping one from bottom
let dealplayerCards = () => {
  let top = deck.shift();
  let bottom = deck.pop();
  Playerdeck.push(top, bottom);
};
dealplayerCards();
//deal dealer cards by shifting one from top
let dealdealerCards = () => {
  let top = deck.shift();
  Dealerdeck.push(top);
};
dealdealerCards();
//determine weight of each hand by adding card values
Playerdeck.forEach(card => {
  playerWeight += card.value;
  return playerWeight;
});
Dealerdeck.forEach(card => {
  dealerWeight += card.value;
  return dealerWeight;
});
//deal function calculates player weight and adds card weight
let deal = function() {
  let dealt_card = deck.shift();
  cardWeight = dealt_card.value;
  Playerdeck.push(dealt_card);
  if (dealt_card.value === "A") {
    if (playerWeight < 10) {
      dealt_card.value = 11;
      playerWeight = playerWeight + cardWeight;
      return playerWeight, Playerdeck;
    } else if (playerWeight > 10) {
      dealt_card.value = 1;
      playerWeight = playerWeight + cardWeight;
      return playerWeight, Playerdeck;
    }
  } else {
    playerWeight = playerWeight + cardWeight;
  }

  return playerWeight, Playerdeck;
};
//big block of functional programming use readline to trigger deal and play depending on the game state
let play = function() {
  readline.question("[H]it or [S]tay? ", answer => {
    if (answer == "h" || answer == "H") {
      deal();
      if (playerWeight >= 22) {
        console.log("RIP!");
        console.log(
          " PLayer: ",
          Playerdeck,
          playerWeight,
          " Dealer: ",
          Dealerdeck,
          dealerWeight
        );
      } else if (dealerWeight >= 22) {
        console.log("Congrats you win!");
        console.log(
          " PLayer: ",
          Playerdeck,
          playerWeight,
          " Dealer: ",
          Dealerdeck,
          dealerWeight
        );
      } else if(dealerWeight > 17) {
          play()
        //neeed to else if dealer busts on H
      }else{
        let dealt_card = deck.pop();
        dealtWeight = dealt_card.value;
        Dealerdeck.push(dealt_card);
        dealerWeight = dealerWeight + dealtWeight;
        play();
        console.log(
          " PLayer: ",
          Playerdeck,
          playerWeight,
          " Dealer: ",
          Dealerdeck,
          dealerWeight
        );
        return playerWeight, Playerdeck, Dealerdeck, dealerWeight;
      }
    } else if (answer == "s" || answer == "S") {
      let dealt_card = deck.pop();
      dealtWeight = dealt_card.value;
      Dealerdeck.push(dealt_card);
      dealerWeight = dealerWeight + dealtWeight;
      play()
      if (dealerWeight == 21) {
        console.log("Dealer gotchu");
        console.log(
          " PLayer: ",
          Playerdeck,
          playerWeight,
          " Dealer: ",
          Dealerdeck,
          dealerWeight
        );
      } else if (dealerWeight >= 22) {
        console.log("Congrats you win!");
        console.log(
          " PLayer: ",
          Playerdeck,
          playerWeight,
          " Dealer: ",
          Dealerdeck,
          dealerWeight
        );
    }else if( dealerWeight > 17 ){
        console.log("dealer stays" +
            " PLayer: ",
            Playerdeck,
            playerWeight,
            " Dealer: ",
            Dealerdeck,
            dealerWeight
          );
        play()

      } else {
        let dealt_card = deck.pop();
        dealtWeight = dealt_card.value;
        Dealerdeck.push(dealt_card);
        dealerWeight = dealerWeight + dealtWeight;
        console.log(
          " PLayer: ",
          Playerdeck,
          playerWeight,
          " Dealer: ",
          Dealerdeck,
          dealerWeight
        );
        
        play();
      }
    }
  });
};

play();
console.log(
  " PLayer: ",
  Playerdeck,
  playerWeight,
  " Dealer: ",
  Dealerdeck,
  dealerWeight
);
