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


