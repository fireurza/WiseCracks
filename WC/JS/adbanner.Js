window.onload = rotate;

var thisAd = 0;

function rotate()
{
    "use strict";
    
    var adImages = new
    Array("image/AAron.gif", "image/Eric.gif", "image/Wells1.gif", "image/group.jpg", "image/Wang1.gif");
    
    thisAd++; 
    
    if(thisAd === adImages.length)
    {
    thisAd = 0;
    }
    document.getElementById("adBanner").src = adImages[thisAd];
    
    setTimeout(rotate, 3*1000);
}