function showPic(whichPic) {
    var source = whichPic.getAttribute("href");
    var text = whichPic.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
    var description = document.getElementById("description");
    //alert(description.childNodes[0].nodeValue);
    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    //alert(body_element.nodeType)
}

window.onload = countBodyChildren();