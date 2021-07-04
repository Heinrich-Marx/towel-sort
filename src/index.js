
// You should implement your task here.

module.exports = function towelSort (matrix) {

  var arr  = [];
  for (var i = 0; i<matrix.length; i++) {
    let q = 0
    for (var j = 0; matrix[i].length; j++) {
     // let q = i % 2 == 0 ? j : (matrix[i].length - j - 1)

     // return (matrix[i][q])
      //let a;
     i % 2 == 0 ? arr.push(j) :  arr.push([matrix[i].length-j-1])

    //if (i%2 == 0) 
  //   var q = arr.push(matrix[i][j]);
    //  else 
    // var w = arr.push(matrix[i][matrix[i].length-j-1]);
    } return arr;
  }
 // return arr;
};
