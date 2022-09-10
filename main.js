window.onresize = screen   //resize kortesi screen tai onresize
window.onload = screen   //live width dekhacche tai onload

function screen(){
    myWidth = window.innerWidth  //width ta koto hocche sheita dekhacche

    document.getElementById('size').innerHTML = "Width: " + myWidth
}