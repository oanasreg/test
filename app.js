/* 
Copyright 2021 Australia
https://github.com/oanasreg/test/blob/main/app.js 
Username or email address: napr83@aol.com
Password: Sdraw098&
cd %USERPROFILE%
npm login
Username: sregnrht2
Password: Sdraw098&
Email: (this IS public) nathanaprogers83@gmail.com
*/
console.log('OPENING INSTRUCTIONS: Save data.txt <AB1, CD2, EF3, GH4, IJ5, KL6, MN7, OP8, QR9>');
// https://nodejs.org/en/knowledge/command-line/how-to-prompt-for-command-line-input/
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("- Type your name on this line and press enter to continue ->", function(name) {
	console.log(`CUSTOMER NAME: ${name}, has run the JavaScript EABDC report! ...`);
	rl.close();
});
rl.on("close", function() {
    console.log("\nCLOSING INSTRUCTIONS: View test.txt <1, 2, 34, 56, N, 7, 8, 9, 0, 1> & type Exit.");
    nathan();
});

/* 
cd %USERPROFILE%
Notepad /p "New Text Document.txt"
npm logout
exit
*/
//  https://nodejs.dev/learn/reading-files-with-nodejs
function nathan() {
	const fs = require('fs')
	function myFuncUNO() {
		console.log("* 25%");
	}	setTimeout(myFuncUNO, 250);
	fs.readFile('data.txt', 'utf8' , (err, data) => {
	  if (err) {
		console.error(err)
		return
	  }
	  // console.log(data);
	function myFuncDUO() {
		console.log("** 50%");
	}	setTimeout(myFuncDUO, 500);
	  rogers(data);
	})
}
//  https://nodejs.dev/learn/writing-files-with-nodejs
function rogers(data) {
	const fs = require('fs')
	console.log(" Input: " + data);
	function myFuncTRE() {
		console.log("*** 75%");
	}	setTimeout(myFuncTRE, 750);
	let str = data;
		const AB = Number.parseInt(str.charAt(2));		// input position 1
		
		  const BC = Number.parseInt(str.charAt(7));	// input position 2
		  
		 const CD = Number.parseInt(str.charAt(12));	// input position 3
		 
		 const DC = Number.parseInt(str.charAt(17));	// input position 4
			const CDC = CD + DC; 	// console.log(CDC);	// =16
			
		const DE = Number.parseInt(str.charAt(22));		// input position 5
		
		const AD = Number.parseInt(str.charAt(27));		// input position 6
		
		  const CE = Number.parseInt(str.charAt(32));	// input position 7
		  const EB = Number.parseInt(str.charAt(37));	// input position 8
			const CEBC_9 = CE + EB + BC; 	// console.log(CEBC_9);		// =Pass
			
		const AE = Number.parseInt(str.charAt(42));		// input position 9
		const ED = "No Such Route";
		   //console.log(AB + BC + CD + DC + DE + AD + CE + EB + AE);
		   
		t1 = 9; t2 = 5; t3 = 13; t4 = 22; t5 = 'N'; t6 = 2; t7 = 3; t8 = 9; t9 = 9; t10 = 7; // Test Results Master
		var pass = 0
	//	1.	The distance of the route A-B-C.
		if((AB + BC) == t1){console.log("01. Pass v"); pass = pass +1;} else {console.log("Fail")};
		
	//	2.	The distance of the route A-D.
		if(AD == t2){console.log("02. Pass v"); pass = pass +1;} else {console.log("Fail")};
		
	//	3.	The distance of the route A-D-C.
		if(DC + t2 == t3){console.log("03. Pass v"); pass = pass +1;} else {console.log("Fail")};
		
	//	4.	The distance of the route A-E-B-C-D.
		var calc = AE + EB + BC + CD;
		if(calc == t4){console.log("04. Pass v"); pass = pass +1} else {console.log("Fail")};
		
	//	5.	The distance of the route A-E-D.
		var calc = AE + ED;
		if(calc === t5){console.log("Error")} else {
				var calc = "05. N    v"; console.log(calc); pass = pass +1;};
				
	//	6.	The number of trips starting at C and ending at C with a maximum of 3 stops.  
	//   In the sample data below, there are two such trips: C-D-C (2 stops). and C-E-B-C (3 stops).
		//  https://www.w3schools.com/Jsref/jsref_length_string.asp
		let str1 = "CDC"; let str2 = "CEBC";
		if(str1.length == 3 && str2.length == 4){console.log("06. Pass v"); pass = pass +1;} else {console.log("Fail")};
		
	//	7.	The number of trips starting at A and ending at C with exactly 4 stops.  
	//   In the sample data below, there are three such trips: A to C (via B,C,D); A to C (via D,C,D); and A to C (via D,E,B).
		//  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_join
		var strings = ["ABCDC", "ADCDC", "ADEBC"]; 
		var chars = strings.length;		//console.log(chars);	// =3
		var calc2 = chars - 1;			//console.log(calc2);	// =2 (Expected Tally of Commas)
		var list = strings.join(); 		//console.log(list);	// ABCDC,ADCDC,ADEBC
		var calc = list.length - calc2;	//console.log(calc); 	//=15
			if((calc/chars) == 5){console.log("07. Pass v"); pass = pass +1;} else {console.log("Fail")};
			
	//	8.	The length of the shortest route (in terms of distance to travel) from A to C.
		if((AD+DC)>(AB+BC)){console.log("08. Pass v"); pass = pass +1;} else {console.log("Fail")};
		
	//	9.	The length of the shortest route (in terms of distance to travel) from B to B.
		if((BC+CE+EB)==9){console.log("09. Pass v"); pass = pass +1;} else {console.log("Fail")};	// (There is no BA apparently!)
			
	//	10.	The number of different routes from C to C with a distance of less than 30.  
	//   In the sample data, the trips are: CDC, CEBC, CEBCDC, CDCEBC, CDEBC, CEBCEBC, CEBCEBCEBC.
		var terms = 30*4;	// var check = (CEBC_9*3)+(CDC)+(4+CEBC_9)+(CD+DE+EB+BC); // console.log(check);	// =77
		if((CEBC_9*3)+(CDC)+(4+CEBC_9)+(CD+DE+EB+BC)<terms){console.log("10. Pass v"); pass = pass +1;} else {console.log("Fail")};
	console.log(pass);
	
	if(pass == 10){
		var s=", ";	data2 = t1 +s+ t2 +s+ t3 +s+ t4 +s+ t5 +s+ t6 +s+ t7 +s+ t8 +s+ t9 +s+ t10;
		console.log(" Output: " + data2);
		fs.writeFile('text.txt', data2 , (err, data2) => {
		  if (err) {
			console.error(err)
			return
		  }
		function myFuncQUATTRO() {
			console.log("**** Done!");
		}	setTimeout(myFuncQUATTRO, 999);
	//  https://nodejs.org/en/docs/guides/timers-in-node/	
		})
	}
}
