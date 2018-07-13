let readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});
//game arrays
let deck = [];
let Playerdeck = [];
let Dealerdeck = [];
//Hand values values
let playerWeight = 0;
let dealerWeight = 0;
//player bets
let playerBet = 200;
let dealerBet = 200;
//Bet weight amount
let betWeight = 20;
//create array of values and suits
let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
let suits = ["♣️", "♦️", "♠", "❤️"];
//card function that defines what properties a card object should have then returns the object schema
//after taking in the variables name,suit,value it returns them in the form of an object
const cards = (value, suit) => {
  this.name = value + " " + "of" + " "  + suit + " ";
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
//https://bost.ocks.org/mike/shuffle/
//Using Fisher-Yates shuffle algo, picked it up from the internets, but an explaination of how it works above
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
//reset after Bust or Win
let reset = () => {
    Playerdeck.length = 0;
    Dealerdeck.length = 0;
    //let function scope is what kept previous value.
    playerWeight = 0;
    dealerWeight = 0;

   shuffle_deck()
   dealdealerCards()
   dealplayerCards()

   Playerdeck.forEach(card => {
    playerWeight += card.value;
    return playerWeight
  });
  Dealerdeck.forEach(card => {
    dealerWeight += card.value;
   return playerWeight
  });
  console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
 play()
}
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
  if(playerWeight <= 10 && dealt_card.value === 11 ){
    dealt_card.value = 11
  }else if(playerWeight >= 11 && dealt_card.value === 11){
    dealt_card.value = 1
  }
  cardWeight = dealt_card.value;
  Playerdeck.push(dealt_card);
  playerWeight += cardWeight

};
//Betting enabled, fix amount 20, default in on play
let bet = function(){
  console.log('💲 💲 💲 💲 💲  Placing Bets at:  ',betWeight,"  💲 💲 💲 💲 💲" )
  console.log('💲 💲 💲 Player Funds:  ',playerBet,'  💲 💲 💲  Dealer Funds:  ',dealerBet,'  💲 💲 💲' )
  if(playerWeight > dealerWeight && playerWeight < 22){
    dealerBet -= betWeight
    playerBet += betWeight
    console.log('Player won bet  ','💲💲💲',playerBet)
    console.log('Dealer lost bet ','💲💲💲',dealerBet)
  }else if(dealerWeight > playerWeight && dealerWeight < 22){
    playerBet -= betWeight
    dealerBet += betWeight
    console.log('Dealer won Bet ','💲💲💲',dealerBet)
    console.log('Player lost bet  ','💲💲💲',playerBet)
  }else if(playerWeight > dealerWeight && playerWeight > 21){
    playerBet -= betWeight
    dealerBet += betWeight
    console.log('Dealer won Bet ','💲💲💲',dealerBet)
    console.log('Player lost bet  ','💲💲💲',playerBet)
  }else if(dealerWeight > playerWeight && dealerWeight > 21){
    dealerBet -= betWeight
    playerBet += betWeight
    console.log('Player won bet  ','💲💲💲',playerBet)
    console.log('Dealer lost bet ','💲💲💲',dealerBet)
  }else if(playerWeight == dealerWeight){
    playerBet -= betWeight
    dealerBet += betWeight
    console.log('Dealer won Bet ','💲💲💲',dealerBet)
    console.log('Player lost bet  ','💲💲💲',playerBet)
  }else{
    console.log('Bets returned ERR')
  }
}
//Dealer fold over next card
let fold = function() {
    let dealt_card = deck.pop();
    dealtWeight = dealt_card.value;
    Dealerdeck.push(dealt_card);
if(dealt_card.value === 11){
    if(dealerWeight <= 10){
        dealt_card.value = 11;
        dealerWeight = dealerWeight + dealtWeight;
    }else{
        dealt_card.value = 1;
        dealerWeight = dealerWeight + dealtWeight;
    }
}else {
    dealerWeight = dealerWeight + dealtWeight;
    }
}
//big block of nested if. use readline to trigger deal and play depending on the game state
let play = function() {
  readline.question(" 🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭   [H]it or [S]tay?   🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦\n\r ", answer => {
    
    if(answer == "h" || answer == "H") {//IF PRESS H
        console.log("❤️  💀  ❤️  Hitting ❤️  💀  ❤️ ️ ")
        
        deal()
        if(playerWeight >= 22){//If player BUST
           bet()
            console.log("PLAYER 💀   BUST 💀   RIPPP\n\r ","💀    PLAYER  💀   SCORE: ",playerWeight)
            console.log("💀    PLAYER||BUSTED   💀   CARDS: ",Playerdeck)
            console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
            reset()
        }else if(playerWeight == 21){//if player BLACKJACK
          
            console.log("❤️ ❤️ ❤️ CONGRATS PLAYER HAS ♠️ BLACKJACK ♠️  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
            console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
            bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                reset()
        //Need to use switch. Too many If else 
        }else if(playerWeight < 22 && dealerWeight < 17){ //If player not bust and dealer under 17 dealer hits
            console.log('❤️ Dealer Next Card ❤️... Playing.. ')
            fold()
        
            if(dealerWeight >= 22){
             
                console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
                console.log("💀 💀 💀  DEALER BUST || PLAYER WINN  ❤️ ❤️ ❤️")
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                reset()
            }else if(dealerWeight == 21){
              console.log("💀 💀 💀  DEALER HAS ♠️ BLACKJACK ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
              console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
              bet()
              console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                reset()
            }else{ 
            console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
            console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
            console.log('❤️ NEXT TURN ❤️... Playing.. ')
            play()
            }
            
        }else if(playerWeight < 22 && dealerWeight >= 17) { // if player not bust and dealer above 17
            console.log('❤️ DEALER STAYS ❤️... Playing.. ')
            console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
            console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
            console.log('❤️ NEXT TURN ❤️... Playing.. ')
            play() 
        }else{ //IF DEAL DOESN"T BUST PLAY
        console.log('❤️ NEXT TURN ❤️... Playing.. ')
        play()
         }
    }else if (answer == "s" || answer == "S"){//IF PRESS S
      console.log("❤️  ❤️  ❤️ Staying ❤️  ❤️  ❤️")
       if(playerWeight == 21){ //If player blackjack 
            console.log("❤️ ❤️ ❤️ CONGRATS PLAYER HAS ♠️  BLACKJACK  ♠️  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
            console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
            bet()
            console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
            reset()
       }else if(dealerWeight <= 17 && dealerWeight < playerWeight){ //if dealer less than 17 and less than player
        console.log('❤️ Dealer Next Card ❤️... Playing.. ')
          fold()
            if(dealerWeight >= 22){ //if dealer over 22
                  console.log("💀 💀 💀  DEALER BUST || PLAYER WINN  ❤️ ❤️ ❤️")
                  console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  bet()
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
            }else if(dealerWeight > playerWeight && dealerWeight < 21){ //if dealer beat player with higher score
              console.log("💀 💀 💀  DEALER HAS ♠️ HIGHER SCORE ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()

            }else if (dealerWeight == 21){ //if dealer Blackjack
                  console.log("💀 💀 💀  DEALER HAS ♠️ BLACKJACK ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  bet()
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                    reset()
            }else if(dealerWeight <= 17 && dealerWeight < playerWeight){ //if dealer still less than 17 and less than player
              console.log('❤️ Dealer Next Card ❤️... Playing.. ')
              fold()
              if(dealerWeight >= 22){ //if dealer BUST
                  console.log("💀 💀 💀  DEALER BUST || PLAYER WINN  ❤️ ❤️ ❤️")
                  console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  bet()
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
              }else if(dealerWeight > playerWeight && dealerWeight < 22){ //If dealer has better score
                console.log("💀 💀 💀  DEALER HAS ♠️ HIGHER SCORE ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()

              }else if(dealerWeight < playerWeight){ //player wins
                console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                reset()
              }else{
                console.log("💀 💀 💀  SORRY :? DEALER WINS TIE BREAKER 💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
                bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                    reset() 
              }

            }else if(dealerWeight >= 17 && dealerWeight < playerWeight){ //If dealer has more than 18 and still less that player
                console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
                console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
                console.log("💀  DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"💀  SCORE:  💀\n\r", dealerWeight)
                bet()
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                    reset()
            
            }else{//ELSE IDK
              console.log("💀 💀 💀  SORRY :? DEALER WINS TIE BREAKER 💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
              bet()
              console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
              
                reset()
            }
       }else if(dealerWeight >= 18 && dealerWeight > playerWeight){ //if dealer has more than 17 and higher than player
            console.log("💀 💀 💀  DEALER HAS ♠️ HIGHER SCORE ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
            console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
            console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
            bet()
            console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
            reset()
       }else if(dealerWeight >=18 && dealerWeight < playerWeight){ //if dealer has more than 17 cant hit and player has more
          console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
          console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
          bet()
          console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
            reset()
       }else{//IDK
        console.log("💀 💀 💀  SORRY :? DEALER WINS TIE BREAKER 💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
        bet()
        console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
            reset()

       }
        
    }else{//ELSE PRESS ANY OTHER KEY
        console.log("ERROWORT PLEASE ENTER CORRECT INPUT THANKS")
        play()
    }
  });
};


console.log("｡ ◕ ‿‿ ◕  ｡", "🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾")
console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
console.log("💀  DEALER CARDS: 💀\n\r", Dealerdeck ,'\n\r',"💀  SCORE: ", dealerWeight)
console.log('💲 💲 💲 💲 💲  Placing Bets at:  ',betWeight,"  💲 💲 💲 💲 💲" )
console.log('💲 💲 💲 Player Funds:  ',playerBet,'  💲 💲 💲  Dealer Funds:  ',dealerBet,'  💲 💲 💲' )
play()



/*supposed to be a loading bar. I haven't completely worked it out yet... ⌛ ⏳
let bars = ['🂱 ,🂲, 🂳, 🂴, 🂵, 🂶, 🂷, 🂸, 🂹, 🂺, 🂻, 🂼, 🂽, 🂾, 🂡, 🂢, 🂣, 🂤, 🂥, 🂦, 🂧, 🂨, 🂩 ,🂪, 🂫, 🂬, 🂭, 🂮, 🃁, 🃂, 🃃, 🃄, 🃅, 🃆, 🃇, 🃈, 🃉, 🃊, 🃋, 🃌, 🃍, 🃎, 🃑, 🃒, 🃓, 🃔, 🃕, 🃖, 🃗, 🃘, 🃙, 🃚, 🃛, 🃜, 🃝, 🃞'
]
let move = function(){

let width = 0;
let id = setInterval(frame, 100  )

function frame() {
  if (width == 100){
    clearInterval(id)
  }else{
    width++
    bars = bars.map(function(val){return ++val;});
    console.log = (val) => {
      process.stdout.write(`Shuffling cards.....${val}\n`);
    };
   }
  }
 }
move()
*/

//betting UGHHH ⛀ ⛁ ⛂ ⛃ 💰 💱 💲 💳 💴 💵 💶 💷 Done
//unicode "｡ ◕ ‿‿ ◕  ｡", "🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾" 
//http://xahlee.info/comp/unicode_games_cards.html
