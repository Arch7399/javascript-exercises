const repeatString = function(letter, num) {
	let word = '';
	if (num<0){
	word = "ERROR";}
	else {
	for (let i=0;i<num;i++){
		word += letter;}}
	return word;
};
repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;


