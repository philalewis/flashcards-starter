const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');
const Turn = require('../src/Turn');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Game = require('../src/Game');
const data = require('../src/data.js');
const cardData = data.prototypeData;

describe('Game', () => {

  let cards = [];
  cardData.forEach(card => {
    cards.push(new Card(
      card.id, 
      card.question, 
      card.answers, 
      card.correctAnswer
    ))
  })
  let deck;
  let round;
  let game;

  beforeEach( () => {
    deck = new Deck(cards);
    round = new Round(deck);
    game = new Game(round);
  })

  it('should keeep track of the current round', () => {
    expect(game.currentRound).to.equal({});
  })

  it('should create cards', () => {
    game.start();
    expect(game.round.deck[0]).to.be.an.instanceof(Card);
  })

  it('should put cards in the deck', () => {
    game.start();
    expect(game.round.deck).to.be.an.instanceof(Deck);
  })

  it('should create a new round', () => {
    expect(game.currentRound).to.be.an.instanceof(Round);
  })
})