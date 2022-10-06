const removeFromArray = function(array, ...remove) {
	let newArray = [...array];
	for (let i=0; i<array.length; i++){
		if(newArray.includes(remove[i])){
		newArray.splice(newArray.indexOf(remove[i]),1);		
		}
	}
	return newArray;
};
removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
