// Create an object containing information about a person
const person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer",
    hobbies: ["Reading", "Hiking", "Cooking"],
    contact: {
      email: "john.doe@example.com",
      phone: "555-1234"
    }
  };
  
  // Print out the person's name and occupation
  console.log("Name: " + person.name);
  console.log("Occupation: " + person.occupation);
  
  // Print out the person's hobbies
  console.log("Hobbies:");
  for (let i = 0; i < person.hobbies.length; i++) {
    console.log("- " + person.hobbies[i]);
  }
  
  // Print out the person's contact information
  console.log("Contact:");
  console.log("- Email: " + person.contact.email);
  console.log("- Phone: " + person.contact.phone);  