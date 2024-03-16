/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of
 the array of magicians’ names. Because the original array will be unchanged, return the new array and store
 it in a separate array. Call show_magicians() with each array to show that you have one array of the original
  names and one array with the Great added to each magician’s name.*/
var magicianName2 = ["Harry Potter", "Hermione", "Ron Weasley", "Draco Malfoy", "Ginny Weasley"];
function show_Magicians(name) {
    for (var i = 0; i < name.length; i++) {
        console.log(name[i]);
    }
}
console.log("Magician name's List:");
show_Magicians(magicianName2);
function make_great(name) {
    var great = name.map(function (magician) { return "the Great ".concat(magician); });
    return great;
}
var greatMagician1 = make_great(magicianName2);
console.log("\n Great Magician's name list:");
show_Magicians(greatMagician1);
