export const InspectorBack = document.getElementById("Inspector")
export const InspectorImage = document.getElementById("InspectorViewImage")
export const InspectorCloseButton = document.getElementById("InspectorCloseButton")

export function InspectImage(ImageSource){
    InspectorBack.style.visibility = "visible"
    InspectorImage.setAttribute("src",ImageSource)
}
export function CloseInspect(){
    InspectorBack.style.visibility = "hidden"
}
//
//InspectorImage.setAttribute("style","src:url("+MyUrl+");")
InspectorImage.setAttribute("style","src:url(../Pictures/Icon_MCG.png );")
InspectorBack.addEventListener("click",function(ClickTarget){
    if (ClickTarget.target == InspectorBack){
        console.log("Exit Click")
        CloseInspect()
    }
})
InspectorImage.addEventListener("click",function(ClickTarget){
    if (ClickTarget.target == InspectorImage){
        console.log("Image Click")
    }
})
InspectorCloseButton.addEventListener("click",function(ClickTarget){
    if (ClickTarget.target == InspectorCloseButton){
        console.log("Image Click")
        CloseInspect()
    }
})
CloseInspect()