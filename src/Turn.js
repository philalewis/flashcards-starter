class Turn {
  constructor(card, guess) {
    this.card = card;
    this.guess = guess;
  }

  returnGuess() {
    return this.guess;
  }

  returnCard() {
    return this.card;
  }

  evaluateGuess() {
    return this.guess === this.card.correctAnswer ? true : false;
  }

  giveFeedback() {
    return this.evaluateGuess() ? 'correct!' : 'incorrect!';
  }
}

module.exports = Turn;