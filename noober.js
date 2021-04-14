// Code that runs when the page finishes loading
document.addEventListener('DOMContentLoaded', async function() {
  // retrieves data from rides API endpoint
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // selects a random ride
  let ride = json[Math.floor(Math.random() * json.length)]

  // writes random ride to the JavaScript console
  console.log(ride)

  // 🔥 YOUR CODE GOES HERE 🔥
  // Write the recipe (algorithm) in the comments. Then, write the code.
  // Record the passenger information
  let passengerFirstName = ride.passengerDetails.first
  let passengerLastName = ride.passengerDetails.last
  let passengerPhoneNum = ride.passengerDetails.phoneNumber

  // Record the pickup and drop-off location
  let pickUp = `${ride.pickupLocation.address},${ride.pickupLocation.city},${ride.pickupLocation.state} ${ride.pickupLocation.zip}` 
  let dropOff = `${ride.dropoffLocation.address},${ride.dropoffLocation.city},${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}` 
  
  // Decide level of service
 
  let levelOfService

  if (ride.purpleRequested == true) {
        levelOfService = `Noober Purple Passenger`
    } else if (ride.numberOfPassengers > 3) {
        levelOfService = `Noober XL Passenger`
    } else {
        levelOfService = `Noober X Passenger`
    }

  // present data in human-readable format
  console.log(`${levelOfService}: ${passengerFirstName} ${passengerLastName} - ${passengerPhoneNum}. Pickup at ${pickUp}. Drop-off at ${dropOff}.`)

})
