var connectedCells = (matrix) => {
  var visited = {};

  var maxCount = 0;

  var search = (i, k) => {
    var visitedKey = i.toString() + ',' + k.toString();

    if (matrix[i]!== undefined && matrix[i][k] !== undefined) {
      if (matrix[i][k] === 1 && !visited[visitedKey]) { // look at current location
        visited[visitedKey] = true;
        count++;
        search(i, k - 1); // look left
        search(i, k + 1); // look right
        search(i - 1, k); // look up
        search(i + 1, k); // look down
        search(i - 1, k - 1); // look diag up left
        search(i - 1, k + 1); // look diag up right
        search(i + 1, k - 1); // look diag down left
        search(i + 1, k + 1); // look diag down right
      }
    }
  };

  for (var i = 0; i < matrix.length; i++) {
    for (var k = 0; k < matrix[i].length; k++) {
      var count = 0;
      search(i, k);
      maxCount = Math.max(maxCount, count);
    }
  }
  return maxCount;
};

// module.exports = connectedCells;