

Function.prototype.myThrottle = function(interval) {

    let tooSoon = false;

    return () => {

        if (!tooSoon) {
            tooSoon = true;
            setTimeout(function (){tooSoon = false},interval);
        }; 

    };

};


