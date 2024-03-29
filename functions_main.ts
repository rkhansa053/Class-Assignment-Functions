// functions

let vegetableName = "Tomato"
function logVegetableName() {
    let vegetableName = "Tomato"
    console.log(vegetableName);
}
logVegetableName()


// function using string type
function logName(flowerName: string, carName: string, vegetableName: string, foodName: string, countryName: string, personName: string) {
    console.log(flowerName, carName, vegetableName, foodName, countryName, personName);
}
logName("Sunflower", "Karwaan", "Cucumber", "Biryani", "Pakistan", "Khansa")
logName("Rose","City","Potato","Biryani","Dubai","Rahman")


// function 2 numbers, sum

function subtract(a: number , b:number){
    let subtractNum = a - b;
    return subtractNum;
}
let val = subtract(9 , 5);
console.log(val);


function division(c:number , d:number){
    let divisionNum = c/d;
    return divisionNum;
}
let num = division(20 , 4);
console.log(num);
