const names: string[] = ["Yaser", "BIlal", "Ali", "Zia"];
const greeting: string = "Hello, ";

// Loop through the array and print a personalized message to each person
for (let i: number = 0; i < names.length; i++) 
{
  console.log(greeting + names[i] + "!");
}