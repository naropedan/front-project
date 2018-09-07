export const JavaScriptFundamental = {
    task_1: {
        answer: "",
        description: " Write a JavaScript program to compare two objects to determine if the first one contains equivalent property values to the second one.",
        tempObjexcts: [
            {
                name: "Narek",
                lastName: "Pedanyan",
                number: "098416622",
                country: "Armenia"
            },
            {
                name: "Mike",
                lastName: "Tyson",
                number: "094416622",
                country: "USA"
            }
        ],
        getAnswer: function () {
            let objectArray = this.tempObjexcts,
                obj_1KeyList = Object.keys(objectArray[0]),
                obj_2KeyList = Object.keys(objectArray[1]),
                obj_1Length = obj_1KeyList.length,
                obj_2Length = obj_2KeyList.length,
                loopIndex = 0;
            if(obj_1Length === obj_2Length){
                loopIndex = obj_1KeyList.length;
            }else if(obj_1Length > obj_2Length){
                loopIndex = obj_1KeyList.length;
            }else if(obj_1Length < obj_2Length){
                loopIndex = obj_2KeyList.length;
            }
            for(let i=0;i<loopIndex;++i){
                for(let j=0;j<obj_2KeyList.length;++j){
                    console.log(objectArray[0][obj_1KeyList[i]]);
                }
            }
            return loopIndex;
        }
    }
};