console.log("sing.js loaded");

var howDrunk = prompt('How many bottles of beer are on your wall?');

for (var i=0; howDrunk >= i; howDrunk--){
  var partOnePlural = howDrunk + ' bottles of beer on the wall \n'+ howDrunk + ' bottles of beer \nTake one down, and pass it around \n';
  var partTwoPlural = (howDrunk-1) + ' bottles of beer on the wall';
  var partOneSingular = howDrunk + ' bottle of beer on the wall \n'+ howDrunk + ' bottle of beer \nTake one down, and pass it around \n';
  var partTwoSingular = (howDrunk-1) + ' bottle of beer on the wall';
  if (howDrunk===2){
    console.log(partOnePlural + partTwoSingular);
  } else if (howDrunk === 1) {
    console.log(partOneSingular + partTwoPlural);
  } else if (howDrunk === 0){
    console.log("...you're probably dead now");
  } else {
    console.log(partOnePlural + partTwoPlural);
  }
}
//What follows is a pervious solution that was a bit messier
// for (var i=0; howDrunk >= i; howDrunk--){
//   if (howDrunk===2){
//     console.log(howDrunk + ' bottles of beer on the wall \n'
//       + howDrunk + ' bottles of beer \nTake one down, and pass it around \n'
//       + (howDrunk-1) + ' bottle of beer on the wall')
//   } else if (howDrunk === 1) {
//     console.log(howDrunk + ' bottle of beer on the wall \n'
//       + howDrunk + ' bottle of beer \nTake one down, and pass it around \n'
//       + (howDrunk-1) + ' bottles of beer on the wall')
//   } else if (howDrunk === 0){
//     console.log("...you're probably dead now")
//   } else {
//     console.log(howDrunk + ' bottles of beer on the wall \n'
//       + howDrunk + ' bottles of beer \nTake one down, and pass it around \n'
//       + (howDrunk-1) + ' bottles of beer on the wall')
//   }
//
// }
