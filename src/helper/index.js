export function createCustomDomElement(newElementName = null,newElementClassName = null,newElementTextContent = null, newElementId = null){
    if(arguments.length === 0){
        alert("Please add new element properties");
    }
    let newDomElement = document.createElement(newElementName);
    if(newElementClassName !== null){
        newDomElement.className = newElementClassName;
    }
    if(newElementTextContent !== null){
        newDomElement.textContent = newElementTextContent;
    }
    if(newElementId !== null){
        newDomElement.id = newElementId;
    }
    return newDomElement;
}

export function innerById(idName){
    return document.getElementById(idName)
}