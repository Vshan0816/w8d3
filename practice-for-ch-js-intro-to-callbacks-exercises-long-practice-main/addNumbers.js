const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});




function addNumbers(sum, numsLeft, completionCallback) {

    if (numsLeft > 0) {
        

        const user_num = reader.question("Enter a number:", answer => {
            
            
            user_ans = parseInt(answer);

            sum += user_ans;

            console.log(sum);
            numsLeft -= 1;

            addNumbers(sum,numsLeft, completionCallback);
        });

    } else {
        completionCallback(sum);
    }
}; 


function completionCallback(x) {
    return x;
}


addNumbers(0,4,completionCallback);
