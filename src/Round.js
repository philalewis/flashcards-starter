const Turn = require('./Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.currentTurn;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.currentTurn = new Turn(this.currentCard, guess);
    if (!this.currentTurn.evaluateGuess()) {
      this.incorrectGuesses.push({[this.currentCard.id]: guess})
    }
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
  }

  calculatePercentageCorrect() {
    return (this.turns - this.incorrectGuesses.length) / this.turns;
  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentageCorrect() * 100}% of the questions correctly!`
  }
}

module.exports = Round