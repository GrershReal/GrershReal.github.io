/*
document.createElemet() // Creates HTML Elements
document.getElementById("ProjectThumbnail") // Gets HTML Elements by UUID

element.addEventListener(EventType,PassedFunction) // Adds an Event listener
element.removeEventListener(EventType,Index) // Removes an Event listener
element.getEventListeners(EventType) // Returns an array of Event listener
*/

const Logo = document.getElementById("Logo")
const Animations = Logo.getAnimations()
let SpinAnimation;
console.log(Animations)
for (let i=0;i<Animations.length;i++){
    if (Animations[i].animationName == "spin"){
        SpinAnimation = Animations[i]
    }
}
//
SpinAnimation.play()
