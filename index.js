/*
document.createElemet() // Creates HTML Elements
document.getElementById("ProjectThumbnail") // Gets HTML Elements by UUID

element.addEventListener(EventType,PassedFunction) // Adds an Event listener
element.removeEventListener(EventType,Index) // Removes an Event listener
element.getEventListeners(EventType) // Returns an array of Event listener
*/

const Thumbnails = document.getElementsByClassName("ProjectThumbnail")
for (let i=0;i<Thumbnails.length;i++){
    const MyThumbnail = Thumbnails[i]
    const MyPageIcon = MyThumbnail.querySelector("img")
    const MyUrl = MyPageIcon.src
    MyThumbnail.setAttribute("style","background-image:url("+MyUrl+"); background-size:cover;")
    if (!MyThumbnail.querySelector("h3")){ // No heading 3, rescale image to be 100%
        MyPageIcon.style.width = "100%" 
        MyPageIcon.style.height = "100%" 
    }
    else{
        MyPageIcon.style.width = "100%" 
        MyPageIcon.style.height = "140px"
    }
}
//
//
//
const Logo = document.getElementById("Logo")
const Animations = Logo.getAnimations()
let shakeStartAnim;
let shakeLoopAnim;
console.log(Animations)
for (let i=0;i<Animations.length;i++){
    console.log(Animations[i])
    if (Animations[i].animationName == "shakeStart"){
        shakeStartAnim = Animations[i]
    }
    else if (Animations[i].animationName == "shakeLoop"){
        shakeLoopAnim = Animations[i]
    }
}
//
shakeStartAnim.cancel()
shakeLoopAnim.cancel()

Logo.addEventListener("click",function(){
    console.log("Play")
    shakeStartAnim.play()
})
//