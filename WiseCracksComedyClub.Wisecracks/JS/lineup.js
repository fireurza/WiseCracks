window.onload=rotate;

var thisAd=0;

function rotate()

{
    
    "use strict";
    
    var adImages=new
    
Array("images/2017-06-03_22.46.58.jpg", "images/photo_0171671826fbufdp.jpg", "images/2017-06-03_22.49.55.jpg");
    
    thisAd++;
    
    if(thisAd===adImages.length)
    
{
    
    thisAd=0
    
}
    document.getElementById("adBanner").src=adImages[thisAd];
    
    setTimeout(rotate,3*1000);
}
