var current_users = ['john', 'jane', 'bob', 'alice', 'tom'];
var new_users = ['sarah', 'JOHN', 'alice', 'mike', 'kim'];
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var user = new_users_1[_i];
    if (current_users.map(function (u) { return u.toLowerCase(); }).includes(user.toLowerCase())) {
        console.log("Sorry, the username \"".concat(user, "\" is already taken. Please choose a different username."));
    }
    else {
        console.log("The username \"".concat(user, "\" is available."));
    }
}
