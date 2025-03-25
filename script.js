let open = false;
LINKS = ["https://scratch.mit.edu/projects/747635846",
"https://scratch.mit.edu/projects/965784197",
"https://scratch.mit.edu/projects/913573122",
"https://scratch.mit.edu/projects/1017350192"];
hOpen.addEventListener("click", function(){
    if(open==false){
        open = true;
        document.getElementById('link1').style.display = 'block';
        document.getElementById('link2').style.display = 'block';
        document.getElementById('link3').style.display = 'block';
        document.getElementById('hOpen').innerHTML = "close";
        document.getElementById('hOpen').classList.add("open");
        document.getElementById('hOpen').classList.remove("close");
    }
    else{
        open = false;
        document.getElementById('link1').style.display = 'none';
        document.getElementById('link2').style.display = 'none';
        document.getElementById('link3').style.display = 'none';
        document.getElementById('hOpen').innerHTML = "≡";
        document.getElementById('hOpen').classList.add("close"); 
        document.getElementById('hOpen').classList.remove("open");
    }
    console.log(open);
});

// window.onload = () => {
//     if (!window.location.pathname.includes("index.html")) {
//         window.location.href = "index.html";
//     }
// };
dodgetm.addEventListener("click", () => {
    console.log("clicked");
    window.open(LINKS[0], "_blank");
});
WORDLENTtm.addEventListener("click", () => {
    window.open(LINKS[1], "_blank");
});

MAZEtm.addEventListener("click", () => {
    window.open(LINKS[2], "_blank");
});

Scratchesstm.addEventListener("click", () => {
    window.open(LINKS[3], "_blank");
});

dodgeFigure.addEventListener("mouseenter", () =>{
    dodgeimg.src = "assets/dodge_40-60_5fps.gif";
});

dodgeFigure.addEventListener("mouseleave", () =>{
    dodgeimg.src = "assets/dodge.poster.gif";
});

wordlentfigure.addEventListener("mouseenter", () => {
    wordlentimg.src = "assets/WORDELNT_12-32_5fps.gif";
});

wordlentfigure.addEventListener("mouseleave", () => {
    wordlentimg.src = "assets/wordelnt.poster.gif";
});

mazefigure.addEventListener("mouseenter", () => {
    mazeimg.src = "assets/maze_ 6-26_5fps.gif";
});

mazefigure.addEventListener("mouseleave", () => {
    mazeimg.src = "assets/maze.poster.gif";
});

chessfigure.addEventListener("mouseenter", () => {
    chessimg.src = "assets/chess_4-33_5fps.gif";
});

chessfigure.addEventListener("mouseleave", () => {
    chessimg.src = "assets/chess.poster.gif";
});

carimg = document.getElementById("carimg");
carimg.addEventListener("mouseenter", () => {
    carimg.src = "assets/car_4-24_10fps.gif";
});

carimg.addEventListener("mouseleave", () => {
    carimg.src = "assets/car.poster.gif";
});