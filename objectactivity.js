// Create car object with stored properties
let car = {
    type: "Mazda",
    model: "rx7",
    color: "orange"
  };
  console.log(car);
  // Check the type of the object
  console.log(typeof car);
  
  // Update the type property and log update
  car.type = "Toyota";
  console.log("update:",car);
  
  // Add wheels property and log update
  car.wheels = 4;
  console.log("Updated:", car);