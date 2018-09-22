import tasks from "../JavaScriptfundamental/tasks"

const JavaScriptFundamental = {};

JavaScriptFundamental.taskObj = tasks;
JavaScriptFundamental.runTasks = function() {
    let tasksLength = Object.keys(this.taskObj).length;
    for(let i=1;i <= tasksLength;++i){
        this.taskObj[i].solution();
    }
};

export default JavaScriptFundamental;


