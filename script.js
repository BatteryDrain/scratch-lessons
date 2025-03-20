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