 
const trex=document.querySelector("#trex");
const kaktus=document.querySelector("#kaktus");
const point=document.querySelector("#point");
const mount = document.querySelector("#mount")
const ses = document.querySelector("#ses")
let p = -1;
 
function zipla(){
     point.style.left=370+"px"
    if(kaktus.classList!="kaktus-animate")
    {
        kaktus.classList.add("kaktus-animate");
         

     
    }
 
    if(trex.classList!="trex-animate")
    {
        trex.classList.add("trex-animate");
        ses.play()
        p+=1
        point.innerHTML=p
        setTimeout(function(){
            trex.classList.remove("trex-animate");
            ses.pause()
            
        },700);
    }
}
 
var carpismaKOntrol =setInterval(function(){
 
        var trexBottom =parseInt(window
                .getComputedStyle(trex)
                .getPropertyValue("bottom"));
 
        var kaktusLeft =parseInt(window
                .getComputedStyle(kaktus)
                .getPropertyValue("left"));
        
        if(kaktusLeft > 0 && kaktusLeft < 40 && trexBottom < 40){
            
            kaktus.classList.remove("kaktus-animate");
            kaktus.style.display="none";
            alert("oyun bitti, score: "+p);
            setTimeout(function(){
                window.location.reload()
            },200)
        }
},10);



