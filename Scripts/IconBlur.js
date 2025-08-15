import {InspectImage,InspectVideo} from "./Inspector.js"
//
const Thumbnails = document.getElementsByClassName("ProjectThumbnail")
for (let i=0;i<Thumbnails.length;i++){
    const MyThumbnail = Thumbnails[i]
    const MyPageIcon = MyThumbnail.querySelector("img") || MyThumbnail.querySelector("video")
    const MyUrl = MyPageIcon.src

    if (MyPageIcon.tagName == "IMG"){
        MyThumbnail.setAttribute("style","background-image:url("+MyUrl+"); background-size:cover;")
    }
    else if (MyPageIcon.tagName == "VIDEO"){
            MyThumbnail.setAttribute("style","background-color:rgba(50,50,50,0.8); background-size:cover;")
    }
    if (!MyThumbnail.querySelector("h3")){ // No heading 3, rescale image to be 100%
        MyPageIcon.style.width = "100%" 
        MyPageIcon.style.height = "100%" 
    }
    else{
        MyPageIcon.style.width = "100%" 
        MyPageIcon.style.height = "140px"
    }
    MyPageIcon.addEventListener("click",function(){
        if (MyPageIcon.tagName == "IMG"){
            InspectImage(MyPageIcon.src)
        }
        else if (MyPageIcon.tagName == "VIDEO"){
            InspectVideo(MyPageIcon.src)
        }
    })
}