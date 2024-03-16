/*Cars: Write a function that stores information about a car in a Object. The function should always 
receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, such as a color or 
an optional feature. Print the Object that’s returned to make sure all the information was stored 
correctly.*/

interface name_value{
    manufacturer : string;
    modelName: string;
}

interface cars_value extends name_value{
    color : string;
    modelNumber? : number;

} 

const cars_information : cars_value ={

    manufacturer : "Toyota",
    modelName : "LandCruiser",
    color: "White",

}
const cars_information1 : cars_value ={

    manufacturer : "Honda",
    modelName : "Civic",
    color: "Black",
    modelNumber : 2016

}
console.log(cars_information);
console.log(cars_information1);

