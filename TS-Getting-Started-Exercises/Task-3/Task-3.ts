const personName: string = "Raheel";
console.log(`Lowercase: ${personName.toLocaleLowerCase()}`);
console.log(`Uppercase: ${personName.toLocaleUpperCase()}`);
console.log(`Titlecase: ${personName.charAt(0).toLocaleUpperCase()}${personName.slice(1).toLocaleLowerCase()}`);