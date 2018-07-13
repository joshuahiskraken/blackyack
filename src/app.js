//Empty for instancing to be implemented with classes, now my copy and paste folder
if(dealerWeight <= 17) {
  let dealt_card = deck.pop();
  dealtWeight = dealt_card.value;
  Dealerdeck.push(dealt_card);
  dealerWeight = dealerWeight + dealtWeight;
  play()
    }else{
    console.log("dealer stays")
    console.log(
        " PLayer: ",
        Playerdeck,
        playerWeight,
        " Dealer: ",
        Dealerdeck,
        dealerWeight);
    play()
    
    } if (dealerWeight == 21) {
    console.log("Dealer gotchu.. Resetting game");
    console.log(
      " PLayer: ",
      Playerdeck,
      playerWeight,
      " Dealer: ",
      Dealerdeck,
      dealerWeight);
      reset()
      play()

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

if(answer !== "h" || answer !== "H" ) {
  console.log("WERRROR PLEASE USE THE RIGHT KEYS THANKS")
play()

} else if(answer == "h" || answer == "H") {
  deal();


  if (playerWeight >= 22) {
        console.log("RIP!");
        console.log(
        " PLayer: ",
        Playerdeck,
        playerWeight,
        " Dealer: ",
        Dealerdeck,
        dealerWeight);
                reset()
                play()

  } else if (dealerWeight >= 22) { //IF deal Busts on H
    console.log("Congrats you win!");
    console.log(
      " PLayer: ",
      Playerdeck,
      playerWeight,
      " Dealer: ",
      Dealerdeck,
      dealerWeight);
      reset()
      play()
      
  } else if (dealerWeight > 17) {
      play()
    //neeed to else if dealer busts on H
  }else{
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
      dealerWeight);
      play();
  }

} else if (answer == "s" || answer == "S") {
    console.log("Staying.. Resetting...Playing...")
    reset()
    play()
    
}else{
    console.log("ERRRWOR PWEESE USE CORWECT KEYS THANKS")
    play()
}

if(playerWeight >= 22){ //IF DEALER OVER 21 BUST AND RESET
  console.log("PLAYER BUST || DEALER WINS")
  console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
  reset()
  play()

}

if(dealerWeight <= 17){ //IF DEALER UNDER 17 DEAL CARD 
  fold()
  if(dealerWeight >= 22){ //IF DEALER OVER 21 BUST AND RESET
      console.log("DEALER BUST || PLAYER WINN")
      console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
      reset()
      play()

  }else{ //IF DEAL DOESN"T BUST PLAY
      console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
      console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
      play()
  }
}else if(dealerWeight >= 18){ //IF DEALER OVER 18 STAY
  console.log("Dealer Stays")
  console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
  
  }else{
      play()
  }

  Playerdeck.forEach(card => {
    deck.push(card)
});
Dealerdeck.forEach(card => {
    deck.push(card)
});





move()

console.log("｡ ◕ ‿‿ ◕  ｡", "🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾")
console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
                    console.log("💀  DEALER CARDS: 💀\n\r", Dealerdeck ,'\n\r',"💀  SCORE: ", dealerWeight)
play()


function myFunc(arg) {
    console.log(`Shuffling cards... ${arg}`);
  }
  
  setTimeout(myFunc, 950, '🂱 🂲 🂳 🂴 🂵 🂶 🂷 🂸 🂹 🂺 🂻 🂼 🂽 🂾');


console.log("❤️  ❤️  ❤️  Hitting ❤️  ❤️  ❤️ ️ ")
        deal()
        if(playerWeight >= 22){
            console.log("PLAYER 💀 BUST 💀 RIPPP ... Resetting..\n\r ","💀  PLAYER  💀 SCORE: ",playerWeight)
            console.log("PLAYER 💀 BUST 💀 RIPPP ... Resetting..\n\r ","💀  PLAYER  💀 CARDS: ",Playerdeck)
            reset()
            
            
        }else{
            
            if(dealerWeight <= 17){ //IF DEALER UNDER 17 DEAL CARD 
                fold()
                if(dealerWeight >= 22){ //IF DEALER OVER 21 BUST AND RESET
                    console.log("DEALER BUST || PLAYER WINN")
                    console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                    reset()
                    
                    
              
                }else{ //IF DEAL DOESN"T BUST PLAY
                    console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
                    console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                    play()
                }
              }else if(dealerWeight >= 18){ //IF DEALER OVER 18 STAY
                console.log("❤️ ❤️ ❤️ Dealer Stays ❤️ ❤️ ❤️")
                console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                    if(playerWeight > dealerWeight){
                        console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
                        console.log("Resetting.......")
                        reset()
                    }else if(dealerWeight = playerWeight){
                        console.log("💀 💀 💀  SORRY :? DEALER WINS TIE BREAKER  💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
                        reset()
                    }
                       
                
             }else{
                    console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
                    console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                    play()
                }
        }





        console.log("❤️  ❤️  ❤️ Staying ❤️  ❤️  ❤️")
        if(dealerWeight <= 17){ //IF DEALER UNDER 17 DEAL CARD 
            fold()
            if(dealerWeight >= 22){ //IF DEALER OVER 21 BUST AND RESET
                console.log("DEALER BUST || PLAYER WINN")
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                reset()
                
                

            } else{ //IF DEAL DOESN"T BUST PLAY
            console.log('❤️ NEXT TURN ❤️... Playing.. ')
             }
        }else if(dealerWeight >= 18){ //IF DEALER OVER 18 STAY
            console.log("Dealer Stays")
            if(playerWeight > dealerWeight){
                console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
                console.log("Resetting.......")
                reset()
            
            }else{
            console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
            console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
            console.log('❤️ NEXT TURN ❤️... Playing.. ')
            play()
            }
            
            
        } if(dealerWeight == 21){//IF DEALER GETS BLACKJACK ON PLAYER STAY
            console.log('DEALER HAS ♠️ BLACKJACK ♠️ || PLAYER ♦️ LOSES ♦️')
            console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
            reset()
        } if (dealerWeight == playerWeight){
            console.log("💀 💀 💀  SORRY :? DEALER WINS TIE BREAKER 💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
            console.log("Resetting.......")
            reset()   
            
        }else{//IF NO ONE BUSTS OR BLACKJACKS ON STAY
            console.log('❤️ NEXT TURN ❤️... Playing.. ')
            play()
        }



        if(playerWeight >= 22){
            console.log("PLAYER 💀   BUST 💀   RIPPP\n\r ","💀    PLAYER  💀   SCORE: ",playerWeight)
            console.log("💀    PLAYER||BUSTED   💀   CARDS: ",Playerdeck)
            console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
            reset()
        }else if(playerWeight == 21 && dealerWeight < 21){
            console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
            console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                reset()
        }else if(dealerWeight == playerWeight){
          console.log("💀 💀 💀    SORRY :? DEALER WINS TIE BREAKER   💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
          console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
              reset()   
  
        }else if (dealerWeight > playerWeight && dealerWeight >= 18 && dealerWeight < 21){
          console.log("💀 💀 💀  DEALER HAS ♠️ HIGHER SCORE ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
        }  

        
        if(dealerWeight > playerWeight && dealerWeight >= 22){
            console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
            console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                reset()
          }else if(dealerWeight > playerWeight && dealerWeight <= 21){
            console.log("💀 💀 💀  DEALER HAS ♠️ HIGHER SCORE ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
          }else if(dealerWeight <= 17 && dealerWeight < playerWeight){ //IF dealer is less than 17 and less than playerweight fold
              fold()
              console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                if(dealerWeight >= 22 ){ //if dealer busts win
                  console.log("💀 💀 💀  DEALER BUST || PLAYER WINN  ❤️ ❤️ ❤️")
                  console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
                }else if(dealerWeight == 21){
                  console.log("💀 💀 💀  DEALER HAS ♠️ BLACKJACK ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                    reset()
                }else if(dealerWeight <= 17 && dealerWeight < playerWeight){
                  fold()
              console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                }
                if(dealerWeight >= 22 ){ //if dealer busts win
                  console.log("💀 💀 💀  DEALER BUST || PLAYER WINN  ❤️ ❤️ ❤️")
                  console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()


                }else if(dealerWeight == 21){
                  console.log("💀 💀 💀  DEALER HAS ♠️ BLACKJACK ♠️ || PLAYER ♦️ LOSES ♦️  💀 💀 💀")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                    reset()
                }else if(dealerWeight > playerWeight && dealerWeight < 21) {
                  console.log("💀 💀 💀  DEALER HAS ♠️ HIGHER SCORE ♠️ || PLAYER ♦️ LOSES ♦️💀   💀 💀")
                console.log("PLAYER SCORE: ",playerWeight,'\n\r',"SCORE: ", dealerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
                }
            }  //If dealer has more after the second fold
            
            if(Playerdeck.length = 2 && playerWeight < 21){
                console.log('❤️ Dealer Next Card ❤️... Playing.. ')
                fold()
              }else if(playerWeight == 21){
                console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️\n\r", "PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀   DEALER SCORE: ',dealerWeight,' ','💀 💀 💀')
                console.log("❤️   PLAYER CARDS:  ❤️\n\r", Playerdeck ,'\n\r',"❤️  SCORE:  ", playerWeight)
                    console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                    reset()
              //if player doesnt have 21 and dealer is < 17. Dealer needs to fold out card
              }else if(dealerWeight <= 17){
                fold()
              if(dealerWeight >= 22){
                console.log("💀 💀 💀  DEALER BUST || PLAYER WINN  ❤️ ❤️ ❤️")
                  console.log("❤️ ❤️ ❤️ CONGRATS PLAYER WINNS  ❤️ ❤️ ❤️")
                  console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                  console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset()
              }else{ 
                console.log("PLAYER CARDS:\n\r", Playerdeck ,'\n\r',"SCORE:\n\r", playerWeight)
                console.log("DEALER CARDS:\n\r", Dealerdeck ,'\n\r',"SCORE:\n\r", dealerWeight)
                console.log('❤️ NEXT TURN ❤️... Playing.. ')
                play()
                }
                //If dealer has better score and is under bust but over 17 where he would fold out on hit
            }else if(dealerWeight = playerWeight && dealerWeight >= 18 && dealerWeight < 22){
              console.log("💀 💀 💀  SORRY :? DEALER WINS TIE BREAKER 💀 💀 💀",'\n\r',"PLAYER SCORE: ",playerWeight,'\n\r','💀 💀 💀  DEALER SCORE: ',dealerWeight,' ','💀💀💀')
              console.log("🂥  🂦  🂧  🂨  🂩  🂪  🂫  🂬  🂭 Resetting....... 🂺  🂻  🂼  🂽  🂾  🂣  🂤  🂥  🂦")
                  reset() 
            }