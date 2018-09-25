const tasks = {};

tasks[1] = {
    description: "Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.",
    solution: function() {
        let answer = "";
        let obj_1 = {
            name: "Narek",
            lastName: "Pedanyan",
            number: "098416622",
            isMarried: false
        };
        let obj_2 = {
            name: "Edgar",
            lastName: "Torikyan",
            number: "093817768",
            isMarried: false
        };

        for(let x in obj_1){
            for(let y in obj_2){
                if(obj_1[x] === obj_2[y]){
                    answer = true;
                }
            }
        }
        console.log("************************************************************************************************************************");
        console.log(this.description);
        console.log("obj_1", obj_1);
        console.log("obj_2", obj_2);
        console.log(answer);
        console.log("************************************************************************************************************************");
    }
};

tasks[2] = {
    description: "Write a JavaScript program to target a given value in a nested JSON object, based on the given key.",
    solution: function() {
        console.log(this.description);
        function get() {
            let url = "https://jsonplaceholder.typicode.com/users";
            // Return a new promise.
            return new Promise(function(resolve, reject) {
                // Do the usual XHR stuff
                let req = new XMLHttpRequest();
                req.open('GET', url);

                req.onload = function() {
                    // This is called even on 404 etc
                    // so check the status
                    if (req.status == 200) {
                        // Resolve the promise with the response text
                        resolve(req.response);
                    }
                    else {
                        // Otherwise reject with the status text
                        // which will hopefully be a meaningful error
                        reject(Error(req.statusText));
                    }
                };

                // Handle network errors
                req.onerror = function() {
                    reject(Error("Network Error"));
                };

                // Make the request
                req.send();
            });
        }

        get().then(function(data){
           let ourData = JSON.parse(data);
           console.log(ourData);
           for(let i in ourData){
               const dig = (obj, target) =>
                   target in obj
                       ? obj[target]
                       : Object.values(obj[i]).reduce((acc, val) => {
                           if (acc !== undefined) return acc;
                           if (typeof val === 'object') return dig(val, target);
                       }, undefined);

               console.log(dig(ourData, 'geo'));
           }
            console.log("************************************************************************************************************************");
        });
    }
};
tasks[3] = {
    description: "Write a JavaScript program to target a given value in a nested JSON object, based on the given key.",
    solution: function() {
        console.log("qweqwe");
    }
};







export default tasks;