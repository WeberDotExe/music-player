var arr = [
    {songname : "SLAY!",authname :"Eternxlkz",url : "./songs/slay.mp3",img:"./images/slay.jpeg",bgimg:'./bgimg/slay.jpeg'},
    {songname : "MYSTERIOUS GAME",authname :"LXNGVX",url : "./songs/mysterious game.mp3",img:"./images/mysterious.jpeg",bgimg:'./bgimg/mysterious.jpeg'},
    {songname : "MONTAGEM DIAMENTE",authname :"vtze archive,Mc ster",url : "./songs/montagem diamente.mp3",img:"./images/montagem diamente.jpeg",bgimg:'./bgimg/montagem diamente.jpeg'},
    {songname : "MONTAGEM CORAL",authname :"Dj,Holanda",url : "./songs/montagem coral.mp3",img:"./images/montagem coral.jpeg",bgimg:'./bgimg/montagem coral.jpeg'},
    {songname : "GEDAGEDAGO",authname :"2KE,0to8",url : "./songs/gedagedago.mp3",img:"./images/gedagedago.jpeg",bgimg:'./bgimg/gedagedago.jpeg'},
    {songname : "DNA!",authname :"LXNGVX,VISGX",url : "./songs/dna.mp3",img:"./images/dna.jpeg",bgimg:'./bgimg/dna.jpeg'}
]

var songelem = document.querySelector("#songcontent")
var imagesong = document.querySelector("#imagesong");
var bgimg = document.querySelector("#bgimg");
let allsongs = document.querySelector("#allsongs")
var audio = new Audio();
var selectedsongs = 0
var play = document.querySelector("#play")
var forward = document.querySelector("#forward")
var backward = document.querySelector("#backward")

function main(){
    var clutter = ""
arr.forEach(function(elem,index){
    clutter += `<div class="songelem" id="${index}">
    <div class="songcontent">
        <img src="${elem.img}" alt="">
        <h2>${elem.songname}</h2>
    </div>
    <h4 id="duration"></h4>
</div>`
})
allsongs.innerHTML = clutter;
audio.src = arr[selectedsongs].url
imagesong.src = arr[selectedsongs].img
bgimg.src = arr[selectedsongs].bgimg
var songnaam = document.querySelector("#songname").innerHTML = `${arr[selectedsongs].songname}`
var artistname = document.querySelector("#artistname").innerHTML = `${arr[selectedsongs].authname}`

}

flag = 0
allsongs.addEventListener("click",function(dets){
    selectedsongs = dets.target.id
    main();
    play.innerHTML = `<i class="ri-pause-fill"></i>`
    audio.play()
    flag = 1
})

play.addEventListener("click",function(){
    if(flag == 0,audio.paused){
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        flag = 1
        main();
        audio.play()
    }else if(flag == 1){
        play.innerHTML = `<i class="ri-play-fill"></i>`
        flag = 0
        main();
        audio.pause();   
         
    }
    
})

forward.addEventListener("click",function(){
    if(selectedsongs < arr.length -1){
        selectedsongs++
        main()
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        audio.play();
        flag = 1
    }else{
        forward.style.opacity = 0.4
    }
})
backward.addEventListener("click",function(){
    if(selectedsongs > 0){
        selectedsongs--
        main()
        play.innerHTML = `<i class="ri-pause-fill"></i>`
        audio.play();
        flag = 1
    }else{
        backward.style.opacity = 0.4
    }
})

main();

