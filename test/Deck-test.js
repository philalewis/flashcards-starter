const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const data = require('../src/data.js');
const cards = data.prototypeData;

describe('Deck', function() {

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  })

  it('should have a list of cards', function() {
    const deck = new Deck();

    expect(deck.cards).to.be.an('array');
  })

  it('should be able to be initialized with a deck of cards', function() {
    const deck = new Deck(cards);

    expect(deck.cards.length).to.equal(30);
  })

  it('should be able to count the number of cards', function() {
    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(30);
  })
})