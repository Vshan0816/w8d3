const readline = require("readline");
const reader = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});



function askifGreaterThan(el1, el2, callback) {

    reader.question(

        "Is " + el1 + " greater than " + el2 + "?: ", response => {

            if (response === 'yes') {
                callback(true);
            } else {
                callback(false);
            }

        });
};


// function callback(bool) {
//     reader.close();
//     return bool;
    
// }

// ask if true should change boolean of made any swaps
// identify whether array at i is greater than array of i+1

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

    if (i == (arr.length -1)) {
        outerBubbleSortLoop(madeAnySwaps);
        return;
    }

    if (i < arr.length - 1)  {
        askifGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {

            if(isGreaterThan) {
                let temp = arr[i];
                arr[i] = arr[i+1]; 
                arr[i+1] = temp;
                madeAnySwaps = true;
            }
        innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
        });

        
    }; //end if

}

// function outerBubbleSortLoop() {
//     console.log("In outer bubble sort")
// }


// // askifGreaterThan(1, 2, callback);
// innerBubbleSortLoop([3,2,1], 0, false, outerBubbleSortLoop)

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
        } else {
            sortCompletionCallback(arr)
        }
      // Begin an inner loop if you made any swaps. Otherwise, call
      // `sortCompletionCallback`.
    }
  
    // Kick the first outer loop off, starting `madeAnySwaps` as true.
    outerBubbleSortLoop(true)
  }

  absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
  });


