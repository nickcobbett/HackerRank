var pairs = (nums, diff) => {

  var count = 0;

  for (var i = 0; i < nums.length; i++) {
    // console.log('i', i);
    if (nums[i] > 0) {
      var k = nums[i] + diff;
      // console.log('k', k);
      while (nums.includes(k)) {
        nums[nums.indexOf(k)] = -1;
        // console.log('nums', nums);
        count++;
        k += diff;
      }

      var j = nums[i] - diff;
      while (j > 0 && nums.includes(j)) {
        nums[nums.indexOf(j)] = -1;
        count++;
        j -= diff;
      }
      nums[i] = -1;
    }
  }

  return count;
}

var test1 = [1, 5, 3, 4, 2]
var input = '363374326 364147530 61825163 1073065718 1281246024 1399469912 428047635 491595254 879792181 1069262793';
var test2 = input.split(' ').map(char => parseInt(char));

console.log(pairs(test1, 2)) // -> 3
console.log(pairs(test2, 1)) // -> 0