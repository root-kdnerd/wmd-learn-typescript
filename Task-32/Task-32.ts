let current_users: string[] = ['john', 'jane', 'bob', 'alice', 'tom'];
let new_users: string[] = ['sarah', 'JOHN', 'alice', 'mike', 'kim'];

for (let user of new_users) {
  if (current_users.map(u => u.toLowerCase()).includes(user.toLowerCase())) {
    console.log(`Sorry, the username "${user}" is already taken. Please choose a different username.`);
  } else {
    console.log(`The username "${user}" is available.`);
  }
}