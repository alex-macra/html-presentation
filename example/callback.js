// step 1
function multiply (y,z) {
	return y * z;
}

const anotherOne = multiply;
const andAnotherOne = multiply;

multiply(554, 4343)
andAnotherOne(553, 4343)

// step 2
//https://tylermcginnis.com/async-javascript-from-callbacks-to-promises-to-async-await/

function higherOrder (y, callback) {
	return callback(x, 5);
}

higherOrder(10, multiply)