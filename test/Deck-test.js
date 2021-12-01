const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const data = require('../src/data.js');
const cardData = data.prototypeData;

describe('Deck', function() {

  let deck;
  let cards = [];
  cardData.forEach(card => {
    cards.push(new Card(
      card.id, 
      card.question, 
      card.answers, 
      card.correctAnswer
    ))
  })
  
  beforeEach( () => {
    deck = new Deck(cards);
  })

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  })

  it('should have a list of cards', () => {
    expect(deck.cards).to.be.an('array');
  })

  it('should be able to be initialized with a deck of cards', () => {
    expect(deck.cards.length).to.equal(30);
  })

  it('should be able to count the number of cards', () => {
    expect(deck.countCards()).to.equal(30);
  })
})