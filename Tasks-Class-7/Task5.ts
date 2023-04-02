import inquirer from "inquirer";

async function convertToMilitaryTime() {
  const answer = await inquirer.prompt({
    name: "time",
    message: "Enter time in the format HH:MM AM/PM: ",
  });

  const time = answer.time;
  const [hours, minutes, meridian] = time.split(/:|\s/);

  let militaryHours = parseInt(hours);

  if (meridian === "PM" && militaryHours !== 12) {
    militaryHours += 12;
  } else if (meridian === "AM" && militaryHours === 12) {
    militaryHours = 0;
  }

  const militaryTime = `${militaryHours.toString().padStart(2, "0")}:${minutes} hrs`;

  console.log(`The Military time is: ${militaryTime}`);
}

convertToMilitaryTime();
