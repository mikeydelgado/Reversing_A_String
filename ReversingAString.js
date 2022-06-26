function reverseString(str) {
    let newString = '';

    for(let i = str.length - 1; i >= 0; i--){
        newString = newString + str[i];
    }
    
    
    return newString;

}


let cinco = reverseString("Hello");
console.log(cinco);

//Step 1 : make an empty string to store the new string
//Step 2 : make a for loop to go through the string
//str.length corresponds to the last character of
//the string 'o'...so as long as the index of the string
//aka 'i' is greater than or equal to 0 the loop will
//work...so it starts at i = 5 - 1 = 4...the charactr at the
//index 4 is 'o' so it gets added to the newString
//then so on and don't forget to return the value of
//the new String!!!