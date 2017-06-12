// var chai = require('chai');
// var connectedCells = require('./connected.js');

var assert = chai.assert;

describe('connectedCells single region', function() {
  it('should return 0 for all zeroes', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 0);
  });

  it('should return 1 for single region with one cell', function() {
    var matrix = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 1);
  });

  it('should return 2 for single region with horizontal connection', function() {
    var matrix = [
      [1, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with horizontal connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with horizontal connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 1],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with horizontal connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 1]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with vertical connection', function() {
    var matrix = [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with vertical connection', function() {
    var matrix = [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with vertical connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with vertical connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 1]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with diagonal connection', function() {
    var matrix = [
      [1, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with diagonal connection', function() {
    var matrix = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with diagonal connection', function() {
    var matrix = [
      [0, 0, 1, 0],
      [0, 0, 0, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with diagonal connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 0, 0, 1]
    ];
    assert.equal(connectedCells(matrix), 2);
  });

  it('should return 2 for single region with diagonal connection', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);
  });
});

describe('connectedCells larger of Two regions', function() {
  it('should return larger of two regions', function() {
    var matrix = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 2);

    var matrix = [
      [1, 0, 0, 0],
      [1, 0, 0, 0],
      [1, 0, 1, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 3);

  });

  xit('', function() {
    var matrix = [
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });

  xit('', function() {
    var matrix = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ];
    assert.equal(connectedCells(matrix), 'FILL_ME_IN');
  });
});
