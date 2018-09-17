const FrameWrapper = {};

FrameWrapper.IP = 'https://www.w3resource.com/javascript-exercises/';
FrameWrapper.renderComponent =  function(urlParam){
    console.log(urlParam);
    let frame = document.createElement("iframe");
    frame.src = this.IP + urlParam;
    return frame;
};

export default FrameWrapper;