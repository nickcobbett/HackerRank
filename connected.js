var connectedCells = (matrix) => {
  // visited switch
  var visited = {};

  var maxCount = 0;
  // var count = 0;

  var search = (i, k) => {
    // look at current location
    var visitedKey = JSON.stringify(i) + ', ' + JSON.stringify(k);
    // console.log(visitedKey)
    // console.log(visited)
    // console.log('matrix', matrix)
    if (matrix[i]!== undefined && matrix[i][k] !== undefined) {
      if (matrix[i][k] === 1 && !visited[visitedKey]) {
        visited[visitedKey] = true;
        count++;
        // console.log('inner', count)
        // console.log('i', i)
        // console.log('k', k)
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
      count = 0;
      search(i, k);
      // console.log('count', count);
      maxCount = Math.max(maxCount, count);
    }
  }

  return maxCount;
};

// module.exports = connectedCells;