export const InspectorBack = document.getElementById("Inspector")
export const InspectViewer = document.getElementById("InspectViewer")
export const InspectorCloseButton = document.getElementById("InspectorCloseButton")

export const InspectorImg = InspectViewer.getElementsByTagName("img")[0]
export const InspectorVideo = InspectViewer.getElementsByTagName("video")[0]

export function InspectImage(ImageSource){
    InspectorBack.style.visibility = "visible"
    InspectorVideo.style.display = "none"
    InspectorImg.style.display = "inline"
    InspectorImg.setAttribute("src",ImageSource)
}
export function InspectVideo(VideoSource){
    InspectorBack.style.visibility = "visible"
    InspectorImg.style.display = "none"
    InspectorVideo.style.display = "inline"
    InspectorVideo.setAttribute("src",VideoSource)
}
export function CloseInspect(){
    InspectorBack.style.visibility = "hidden"
    InspectorVideo.pause()
}
//
//InspectorImage.setAttribute("style","src:url("+MyUrl+");")
InspectorImg.setAttribute("style","src:url(../Pictures/Icon_MCG.png );")
InspectorBack.addEventListener("click",function(ClickTarget){
    if (ClickTarget.target == InspectorBack){
        console.log("Exit Click")
        CloseInspect()
    }
})
InspectorCloseButton.addEventListener("click",function(ClickTarget){
    if (ClickTarget.target == InspectorCloseButton){
        console.log("Image Click")
        CloseInspect()
    }
})
CloseInspect()