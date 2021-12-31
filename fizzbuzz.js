for (let count =1; count <= 100; count ++){
    if ( count % 3 === 0 && count % 5 === 0){
        console.log("fizzbuzz");
    }
    else if (count % 3 === 0){
        console.log("fizz");
    }
    else if (count % 5 === 0){
        console.log("buzz");
    }
    else {
        console.log(count);
    }
} 

// OR// WITH CONCATANATION AVOID ELSE IF && USES i

for (let i = 1; i <= 100; i++){
    let output = ""

    if (i % 3 == 0) output += "Fizz";

    if (i % 5 == 0) output += "Buzz";

    if (output == "") output = i;

    console.log(output);
}
