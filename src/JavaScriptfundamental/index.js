export const JavaScriptFundamental = {
    task_1: {
        answer: false,
        description: "Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.",
        tempObjects: [
            {
                name: "Narek",
                lastName: "Pedanyan",
                number: "098416622",
                country: "Armenia"
            },
            {
                name: "Mike",
                lastName: "Pedanyan",
                number: "094416622",
                country: "USA"
            }
        ],
        getTaskDetails: function() {
            this.getAnswer();
            console.log("***");
            console.log("1. " + this.description);
            console.log("Entry Objects:" + "\n" , this.tempObjects[0],  "\n" , this.tempObjects[1]);
            console.log("Answer is " + this.answer);
            return "*****";
        },
        getAnswer: function() {
            let objectArray = this.tempObjects,
                obj_1KeyList = Object.keys(objectArray[0]),
                obj_2KeyList = Object.keys(objectArray[1]),
                obj_1Length = obj_1KeyList.length,
                obj_2Length = obj_2KeyList.length,
                loopIndex = 0;
            if(obj_1Length === obj_2Length || obj_1Length > obj_2Length){
                loopIndex = obj_1Length;
                for(let i=0;i<loopIndex;++i){
                    for(let j=0;j<obj_2KeyList.length;++j){
                        if(objectArray[0][obj_1KeyList[i]] === objectArray[1][obj_2KeyList[j]]) {
                            this.answer = true;
                            break;
                        }
                    }
                }
            }
            return this.answer;
        }
    },
    task_2: {
        
    }
};