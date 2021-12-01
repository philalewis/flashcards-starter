const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data.js');
const cardData = data.prototypeData;

describe('Round', function() {
  
  let cards = [];
  cardData.forEach(card => {cards.push(new Card(
    card.id, card.question, card.answers, card.correctAnswer
  ))})
  let deck;
  let round;

  beforeEach( () => {
    deck = new Deck(cards);
    round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function'); 
  })

  it('should hold the deck of cards', () => {
    expect(round.deck.cards.length).to.equal(30);
    expect(round.deck.cards[0].answers.length).to.equal(3);
    expect(round.deck.cards[1].id).to.equal(2);
  })

  it('should hold the current card', () => {
    expect(round.currentCard.correctAnswer).to.equal('object');
  })

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.be.an.instanceof(Card);
    expect(round.returnCurrentCard().id).to.equal(1);
  })

  it('should instantiate a new Turn class when calling takeTurn', () => {
    round.takeTurn('object');
    expect(round.currentTurn).is.an.instanceof(Turn);
  })

  it('should keep track of the number of turns taken', () => {
    round.takeTurn('objecct');
    round.takeTurn('array');
    expect(round.turns).to.equal(2);
  })

  it('should keep track of turns even if the user guesses wrong', () => {
    round.takeTurn('function');
    round.takeTurn('object');
    expect(round.turns).to.equal(2);
  })

  it('should change cards after each turn', () => {
    round.takeTurn('array');
    expect(round.currentCard.id).to.equal(2);
  })

  it('should evaluate whether the guess is correct', () => {
    round.takeTurn('object');
    expect(round.currentTurn.evaluateGuess()).to.equal(true);
  })

  it('should evaluate whether the guess is incorrect', () => {
    round.takeTurn('array');
    expect(round.currentTurn.evaluateGuess()).to.equal(false);
  })

  it('should tell the user if they guessed correctly', () => {
    round.takeTurn('object');
    expect(round.currentTurn.giveFeedback()).to.equal('correct!');
  })

  it('should tell the user if they guessed correctly', () => {
    round.takeTurn('function');
    expect(round.currentTurn.giveFeedback()).to.equal('incorrect!');
  })

  it('should record incorrect guesses', () => {
    round.takeTurn('function');
    round.takeTurn('array')
    expect(round.incorrectGuesses.length).to.equal(1);
    expect(round.incorrectGuesses[0][1]).to.equal('function')
  })

  it('should calculate the percentage of correct answers', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('iteration method');
    round.takeTurn('mutator method');
    round.takeTurn('iteration method');
    expect(round.calculatePercentageCorrect()).to.equal(.6);
  })

  it('should be able to end the round', () => {
    round.takeTurn('object');
    round.takeTurn('array');
    round.takeTurn('iteration method');
    round.takeTurn('mutator method');
    round.takeTurn('iteration method');
    expect(round.endRound()).to.equal('** Round over! ** You answered 60% of the questions correctly!')
  })
})