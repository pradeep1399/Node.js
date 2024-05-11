console.log('server file is running...');

/*
function callback() {
    console.log("calling a callback function...")
}
function add(a,b, callback) {
    let result = a+b;
    console.log(result);
    callback();
}

let result = add(5, 6, callback);
*/

/*
function add(a,b, callback) {
    let result = a+b;
    console.log(result);
    callback();
}

add(5, 6, function(){
    console.log('add completed!');
});
*/

/*
function add(a,b, callback) {
    var result = a+b;
    console.log(result);
    callback();
}

// add(5, 6, () => console.log('add completed'));
add(5, 6, () => {
    console.log('add completed')
});
*/

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

let user = os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'Hi ' + user.username + '!\n', () => {
    console.log('file is created!');
});


var arr = ['pradeep', 'pradeep', 1, 3, 1, 5, 6, 4, 3, 7, 'name', 'verma', 'verma', 'name'];
console.log(_.uniq(arr));

