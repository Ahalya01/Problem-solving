let ticketPrice = 450; 
let departureTime = "morning"; 
let providesMeal = true;
// Check if the ticket meets our requirments
if (ticketPrice < 500 && (departureTime === "morning" || providesMeal)) {
    console.log("Booking the flight.");
} else {
    console.log("Looking for another flight.");
}
