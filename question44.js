/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function
 should have one parameter that collects as many items as the function call provides, and it should print
  a summary of the sandwich that is being ordered. Call the function three times, using a different number
 of arguments each time.*/
function sandwichMaking() {
    var sandwichItems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sandwichItems[_i] = arguments[_i];
    }
    console.log("\n Summary of the Sandwich:");
    sandwichItems.forEach(function (item, i) {
        console.log(" ".concat(i + 1, ".").concat(item));
    });
}
sandwichMaking("Tomato", "Ketchup");
sandwichMaking(" Mayonnaise", "Chicken", "Salad");
sandwichMaking("Egg", "Ketchup");
