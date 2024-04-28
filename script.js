var scb =document.getElementById('scb')
const fewd = document.getElementById('fewd')
const ve = document.getElementById('ve')

var b = document.getElementById('b')
const halaman = document.getElementById('halaman')


scb.onclick = function(){b.scrollIntoView({behavior:"smooth"})}


fewd.onclick = function(){
    halaman.innerHTML ='<iframe id="halaman" src="halaman/frontend.html" frameborder="0"></iframe>'
}

ve.onclick = function(){
    halaman.innerHTML ='<iframe id="halaman" src="halaman/video.html" frameborder="0"></iframe>'
}