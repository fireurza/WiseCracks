// Javascript Document

function showPic(whichpic) {
    "use strict";
    var source = whichpic.getAttribute("href"),
        placeholder = document.getElementById("placeholder"),
        text = whichpic.getAttribute("title"),
        description = document.getElementById("description");
    placeholder.setAttribute("src", source);
    description.firstChild.nodeValue = text;
}