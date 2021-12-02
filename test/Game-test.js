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

  it('should keep track of the current round', () => {
    expect(game.currentRound).to.be.an.instanceof(Round);
  })

  it('should be able to start playing', () => {
    expect(game.start()).is.a('function');
  })

  
})