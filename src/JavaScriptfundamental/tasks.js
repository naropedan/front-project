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
        console.log(this.description);
        console.log("obj_1", obj_1);
        console.log("obj_2", obj_2);
        console.log(answer);
        console.log("************************************************************************************************************************");
    }
};

tasks[2] = {
    description: "Write a JavaScript program to converts a comma-separated values (CSV) string to a 2D array.",
    solution: function() {
        return null;
    }
};







export default tasks;