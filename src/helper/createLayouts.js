import  {createCustomDomElement, innerById} from "./index";

const layoutCreation = {};

layoutCreation.rootDividing = () => {
    innerById("root").appendChild(createCustomDomElement("header", "header", "header"));
    innerById("root").appendChild(createCustomDomElement("section", "content-body", "", "content-body"));
    innerById("content-body").appendChild(createCustomDomElement("div", "columns", "as", "left_side"));
    innerById("content-body").appendChild(createCustomDomElement("div", "columns", "", "right_side"));
    innerById("root").appendChild(createCustomDomElement("footer", "footer-wrapper", "asd"));
};

layoutCreation.frameBodyCreation = (url) => {
    let frame = document.createElement("iframe");

    frame.src = url;
    return frame;
};

export default layoutCreation;




