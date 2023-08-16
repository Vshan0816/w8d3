const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});



function askifGreaterThan(el1, el2, callback) {

    reader.question(

        "Is " + el1 + " greater than " + el2 + "?", response => {

            if (response === 'yes') {
                callback(true);
            } else {
                callback(false);
            }

        });
};


function callback(bool) {
    
    console.log(bool);
    reader.close();
}



function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

    if (i == (arr.length -1)) {
        outerBubbleSortLoop(madeAnySwaps);
    }

    if (i < arr.length - 1)  {
        askifGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {

            if(isGreaterThan) {
                let temp = arr[i];
                arr[i] = arr[i+1]; 
                arr[i+1] = temp;
                madeAnySwaps = true;
            }
        });

        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop)
    }; //end if

}


askifGreaterThan(1, 2, callback);