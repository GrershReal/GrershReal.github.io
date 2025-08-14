import {InspectImage} from "./Inspector.js"
//
const Thumbnails = document.getElementsByClassName("ProjectThumbnail")
for (let i=0;i<Thumbnails.length;i++){
    const MyThumbnail = Thumbnails[i]
    const MyPageIcon = MyThumbnail.querySelector("img")
    const MyUrl = MyPageIcon.src
    MyThumbnail.setAttribute("style","background-image:url("+MyUrl+"); background-size:cover;")
    if (!MyThumbnail.querySelector("h3")){ // No heading 3, rescale image to be 100%
       console.log("NO H3") 
        MyPageIcon.style.width = "100%" 
        MyPageIcon.style.height = "100%" 
    }
    else{
        MyPageIcon.style.width = "100%" 
        MyPageIcon.style.height = "140px"
    }
    MyPageIcon.addEventListener("click",function(){
        InspectImage(MyPageIcon.src)
    })
}