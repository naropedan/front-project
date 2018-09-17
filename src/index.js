'use strict';
import layoutCreation from "./helper/createLayouts";
import FrameWrapper from "./components/index";

layoutCreation.rootDividing();
layoutCreation.frameBodyCreation("https://www.w3resource.com/javascript-exercises/fundamental/index.php");
// FrameWrapper.renderComponent("javascript-basic-exercises.php");
document.getElementById("right_side").appendChild(FrameWrapper.renderComponent("javascript-basic-exercises.php"));

