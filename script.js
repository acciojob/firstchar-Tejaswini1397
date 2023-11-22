function firstChar(text) {
  // your code here
	 if(text===' ' || text==='') return '';
	
	if(text.charAt(0)===' '){
		return text.charAt(1);
	}else{
		return text.charAt(0);
	}

	
	
	

  }





	
// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));



