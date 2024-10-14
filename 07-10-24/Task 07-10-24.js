let nobodyInRoom = true;
let currentWeather = "summer"; 
let nobodyHome = true; 
// Check if nobody is in the room
if (nobodyInRoom) {
    console.log("Turning off the lights.");
}else{
    console.log("Turning on the lights.")
}
// Check the current weather to adjust temperature
if (currentWeather === "winter") {
    console.log("Setting temperature to 22 degrees.");
} else if (currentWeather === "spring") {
    console.log("Setting temperature to 20 degrees.");
} else if (currentWeather === "summer") {
    console.log("Setting temperature to 18 degrees.");
} else if (currentWeather === "rainy") {
    console.log("Setting temperature to 21 degrees.");
}
// Check if nobody is home
if (nobodyHome) {
    console.log("Locking the doors.");
}else{
       console.log("Opening  the doors.");
}
//QUESTION-02
let mathScore = 65; 
let scienceScore = 45; 
// Check if the student passes both subjects
if (mathScore >= 50 && scienceScore >= 50) {
    console.log("Congratulations! You graduate.");
} else {
    console.log("Sorry, you do not graduate.");
}

//QUESTION-03
let ticketPrice = 450; 
let departureTime = "morning"; 
let providesMeal = true;
// Check if the ticket meets our requirments
if (ticketPrice < 500 && (departureTime === "morning" || providesMeal)) {
    console.log("Booking the flight.");
} else {
    console.log("Looking for another flight.");
}

//QUESTION-04
let ram = 8; //IN GB
let hasGoodGraphicsCard = true; 
let price = 75000; 
if (ram >= 8 && hasGoodGraphicsCard && price <= 80000) {
    console.log("Buying the laptop.");
} else {
    console.log("Looking for alternatives.");
}


//QUESTION-05
let attendancePercentage = 85; 
let grade = "B"; 
if (attendancePercentage > 80 && (grade === "A" || grade === "B")) {
    console.log("The student can attend the class trip.");
} else {
    console.log("The student cannot attend the class trip.");
}
