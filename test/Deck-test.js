const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const cards = require('../src/data.js')

describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();

    expect(deck).to.be.a('function');
  })

  it.skip('should have a list of cards', function() {
    const deck = new Deck();

    expect(deck.cards).to.be.an('array');
  })

  it.skip('should be able to be initialized with a deck of cards', function() {
    const deck = new Deck(cards);

    expect(deck.cards.length).to.equal(30);
  })

  it.skip('should be able to count the number of cards', function() {
    const deck = new Deck(cards);

    expect(deck.countCards()).to.equal(30);
  })
})