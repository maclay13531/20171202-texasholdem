// we could write a react but let's go dop...
class Deck{
	constructor(){
		this.deck = [];
	}
	createDeck(){
		// reset the deck
		this.deck = [];
		//two loops. One for suit, one for card value
		const suits = ['h', 's', 'd', 'c'];
		for(let s = 0; s < suits.length; s++){
			for(let c = 1; c <=13; c++){
				this.deck.push(c+suits[s]);
			}
		}
	}
	shuffleDeck(){
		// swap 2 random indicies in the array many many times
		for(let i = 0; i < 100000; i++){
			var rand1 = Math.floor(Math.random() * 52);
			var rand2 = Math.floor(Math.random() * 52);
			// store in temp the value of random[1]
			var temp = this.deck[rand1];
			this.deck[rand1] = this.deck[rand2];
			this.deck[rand2] = temp;
		}
	}
}

export default Deck;