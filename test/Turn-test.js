const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');
const data = require('../src/data.js');
const cards = data.prototypeData;

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  })

  it('should be instatiated with a card', () => {
    const card = new Card(
      cards[0].id, 
      cards[0].question, 
      cards[0].answers, 
      cards[0].correctAnswer);
    const turn = new Turn(card);
    expect(turn.card).to.be.an.instanceof(Card);
  })

  it('should be instantiated with the user\'s guess', () => {
    const card = new Card(
      cards[1].id, 
      cards[1].question, 
      cards[1].answers, 
      cards[1].correctAnswer);
    const turn = new Turn(card, 'array');
    expect(turn.guess).to.be.a('string');
    expect(turn.guess).to.equal('array');
  })

  it('should return the user\'s guess', () => {
    const card = new Card(
      cards[2].id, 
      cards[2].question, 
      cards[2].answers, 
      cards[2].correctAnswer);
    const turn = new Turn(card, 'accessor method');
    expect(turn.returnGuess()).to.equal('accessor method');
  })

  it('should return the card', () => {
    const card = new Card(
      cards[3].id, 
      cards[3].question, 
      cards[3].answers, 
      cards[3].correctAnswer);
    const turn = new Turn(card, 'iteration method');
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  })

  it('should determine if the user\'s guess is correct', () => {
    const card = new Card(
      cards[4].id, 
      cards[4].question, 
      cards[4].answers, 
      cards[4].correctAnswer);
    const turn1 = new Turn(card, 'mutator method');
    const turn2 = new Turn(card, 'iteration method');
    expect(turn1.evaluateGuess()).to.be.a('boolean');
    expect(turn1.evaluateGuess()).to.equal(false);
    expect(turn2.evaluateGuess()).to.equal(true);
  })

  it('should let the user know if they got it right', () => {
    const card = new Card(
      cards[5].id, 
      cards[5].question, 
      cards[5].answers, 
      cards[5].correctAnswer);
    const turn = new Turn(card, 'map()');
    expect(turn.giveFeedback()).to.equal('incorrect!')
  })

  it('should let the user know if they got it wrong', () => {
    const card = new Card(
      cards[6].id, 
      cards[6].question, 
      cards[6].answers, 
      cards[6].correctAnswer);
    const turn = new Turn(card, 'splice()');
    expect(turn.giveFeedback()).to.equal('correct!');
  })
})