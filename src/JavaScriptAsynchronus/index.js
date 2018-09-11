import {stylesLinkCreation} from "../helper/index";

export function JavaScriptAsynchronus(){
    (function createInitialDOMSection(){
        //Root element of document
        let rootelement = document.getElementById("root");
        //Our task section
        let AsynchronusSection = document.createElement("div");
        let sectionEndLine = document.createElement("hr");
        //Data Column
        let dataColumn = document.createElement("pre");
        dataColumn.textContent = "My Mocked data";
        //Our Button
        let requestButton = document.createElement("button");
        requestButton.textContent = "Get Our Data";
        //Wrapping
        AsynchronusSection.appendChild(dataColumn);
        AsynchronusSection.appendChild(requestButton);
        AsynchronusSection.appendChild(sectionEndLine);
        rootelement.appendChild(AsynchronusSection);
    })();



    function loadXMLDoc(callback) {
        let data = false;
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                data = this.responseText;
                callback(data);
            }
        };
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
        xhttp.send();
        return data;
    }
    loadXMLDoc(asd);
    function asd(data){
        console.log(data, "asdasd");
    }
}