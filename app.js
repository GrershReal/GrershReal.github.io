const Thumbnails = document.getElementsByClassName("ProjectThumbnail")
// document.getElementById("ProjectThumbnail")
for (let i=0;i<Thumbnails.length;i++){
    const MyThumbnail = Thumbnails[i]
    const MyPageIcon = MyThumbnail.querySelector("img")
    const MyUrl = MyPageIcon.src
    console.log(MyUrl)
    MyThumbnail.setAttribute("style","background-image:url("+MyUrl+"); background-size:cover;")
    // Change Background Style in MDN
}