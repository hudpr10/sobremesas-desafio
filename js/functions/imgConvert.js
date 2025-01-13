function imgConvert(imgHtml) {
    const string = imgHtml.src;
    const utilData = string.split("images/")[1];
    let convertToThumb = "";

    if(utilData.includes("desktop")) {
        convertToThumb = utilData.replace("desktop", "thumbnail");
    } else if(utilData.includes("mobile")) {
        convertToThumb = utilData.replace("mobile", "thumbnail");
    } else if(utilData.includes("tablet")) {
        convertToThumb = utilData.replace("tablet", "thumbnail");
    }

    return convertToThumb;
}

export default imgConvert;