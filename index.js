/*
document.createElemet() // Creates HTML Elements
document.getElementById("ProjectThumbnail") // Gets HTML Elements by UUID

element.addEventListener(EventType,PassedFunction) // Adds an Event listener
element.removeEventListener(EventType,Index) // Removes an Event listener
element.getEventListeners(EventType) // Returns an array of Event listener
*/

const Logo = document.getElementById("Logo")
const Animations = Logo.getAnimations()
let ShakeAnimation;
let HeatAnimation;
console.log(Animations)
for (let i=0;i<Animations.length;i++){
    console.log(Animations[i])
    if (Animations[i].animationName == "shake"){
        ShakeAnimation = Animations[i]
    }
    else{
        ShakeAnimation[i]
    }
}
//
ShakeAnimation.cancel()
Logo.addEventListener("click",function(){
    Logo.style.animationDuration = "1s"
    Logo.style.animationTimingFunction = "forwards"
    Logo.style.animationIterationCount = "4"
    Logo.style.animationDelay = "0s"
    ShakeAnimation.play()
})
