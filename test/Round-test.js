const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const data = require('../src/data.js');
const cards = data.prototypeData;

describe('Round', function() {
  
  beforeEach( () => {
    const deck = new Deck(cards);
    const round = new Round(deck);
  })

  it('should be a function', () => {
    expect(Round).to.be.a('function'); 
  })

  it('should hold the deck of cards', () => {
    expect(round.deck.length).to.equal(30);
    expect(round.deck[0].answers.length).to.equal(3);
    expect(round.deck[1].id).to.equal(2);
  })

  it('should hold the current card', () => {
    expect(round.currentCard.correctAnswer).to.equal('object');
  })

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.be.an.instanceof(Card);
    expect(round.returnCurrentCard().id).to.equal(1);
  })

  it('should have a takeTurn method', () => {
    expect(round.takeTurn('string')).to.be.a('function');
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

  // it('should evaluate whether the guess is correct', () => {
  //   round.takeTurn('object');
  //   expect()
  // })
})