"use strict"
const social=document.querySelector(".social");
function mouseclick(){
    if(social.clientHeight == 0){
        social.style="height:75px"
}else{
    social.style="height:0px"
}    
}

