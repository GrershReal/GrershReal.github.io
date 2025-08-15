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
let LastLogoClick = 0;
let RapidClickCount = 0
let ActiveCooldown = 0
//
let shakeStartAnim;
let shakeLoopAnim;
let shakeEndAnim;
console.log(Animations)
for (let i=0;i<Animations.length;i++){
    console.log(Animations[i])
    if (Animations[i].animationName == "shakeStart"){
        shakeStartAnim = Animations[i]
    }
    else if (Animations[i].animationName == "shakeLoop"){
        shakeLoopAnim = Animations[i]
    }
    else if (Animations[i].animationName == "shakeEnd"){
        shakeEndAnim = Animations[i]
    }
}
//
shakeStartAnim.cancel()
shakeLoopAnim.cancel()
shakeEndAnim.cancel()
// ANIMATION EVENTS
shakeLoopAnim.addEventListener("finish",function(){
    shakeEndAnim.play()
})
shakeStartAnim.addEventListener("finish",function(){
    shakeLoopAnim.play()
})
// INPUT EVENTS
Logo.addEventListener("click",function(){
    if ((performance.now()-LastLogoClick)/1000<ActiveCooldown){ // performance.now returns in MS
        return
    }   
    ActiveCooldown = 0
    if ((performance.now()-LastLogoClick)/1000<0.25){
        RapidClickCount+=1
    }
    else{
        RapidClickCount=0
    }
    //
    if (RapidClickCount>4){
        console.log("RAPID FIRE!!!!")
        shakeLoopAnim.iterationCount = 60
        shakeStartAnim.cancel()
        shakeLoopAnim.cancel()
        shakeEndAnim.cancel()
        shakeStartAnim.play()
        ActiveCooldown = 5
    }
    else {
        shakeLoopAnim.iterationCount = 4
        shakeStartAnim.cancel()
        shakeLoopAnim.cancel()
        shakeEndAnim.cancel()
        shakeStartAnim.play()
    }
    LastLogoClick = performance.now()
})