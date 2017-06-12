function processData(input) {
  input = input.split('\n').map(line => line.split(' ').map(char => parseInt(char)));
  // console.log(input);

  var array = new Array(input[0][0]).fill(0);
  for (var i = 1; i < input.length; i++) {
    for (var k = input[i][0] - 1; k < input[i][1]; k++) {
      array[k] += input[i][2];
    }
  }
  // console.log(array)
  console.log(Math.max(...array));
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
