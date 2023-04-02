//let usernames: string[] = ['admin', 'john', 'jane', 'alice', 'bob'];
var usernames = [];
if (usernames.length > 0) {
    for (var i = 0; i < usernames.length; i++) {
        if (usernames[i] === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        }
        else {
            console.log("Hello ".concat(usernames[i], ", thank you for logging in again."));
        }
    }
}
else {
    console.log('We need to find some users!');
}
