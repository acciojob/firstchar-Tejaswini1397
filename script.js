function firstChar(text) {
  // your code here
	 if(text==="" || text===" ") return '';
	let str='';
	str+=text.charAt(0);
	return str;
  }





	
// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));



