function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  function show_magicians(magicians: string[]): void {
    console.log("Magicians:");
    for (let i = 0; i < magicians.length; i++) {
      console.log(`- ${magicians[i]}`);
    }
  }
  
  let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  show_magicians(magicians);
  
  make_great(magicians);
  show_magicians(magicians);
  