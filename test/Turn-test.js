const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const cards = require('../src/data.js')

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(turn).to.be.a('function');
  })

  it.skip('should be instatiated with a card', function() {
    const card = new Card(cards[0])
    const turn = new Turn(card)

    expect(turn.card).to.be.an.instanceof(Card);
  })

  it.skip('should be instantiated with the user\'s guess', function() {
    const card = new Card(cards[1]);
    const turn = new Turn(card, 'array');

    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('array');
  })

  it.skip('should return the user\'s guess', function() {
    const card = new Card(cards[2]);
    const turn = new Turn(card, 'accessor method');

    expect(turn.returnGuess()).to.equal('accessor method');
  })

  it.skip('should return the card', function() {
    const card = new Card(cards[3]);
    const turn = new Turn(card, 'iteration method');

    expect(turn.returnCard()).to.be.an.instanceof(Card);
  })

  it.skip('should determine if the user\'s guess is correct', function() {
    const card = new Card(cards[4]);
    const turn1 = new Turn(card, 'mutator method');
    const turn2 = new Turn(card, 'iteration method');

    expect(turn1.evaluateGuess()).to.be.a('boolean');
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('should let the user know if they got it right', function() {
    const card = new Card(cards[5]);
    const turn = new Turn(card, 'map()');

    expect(turn.giveFeedback()).to.equal('incorrect!')
  })

  it('should let the user know if they got it wrong', function() {
    const card = new Card(cards[6]);
    const turn = new Turn(card, 'splice()');

    expect(turn.giveFeedback()).to.equal('correct!')
  })
})