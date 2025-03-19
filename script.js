let open = false;
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
})

// window.onload = () => {
//     if (!window.location.pathname.includes("index.html")) {
//         window.location.href = "index.html";
//     }
// };
dodgetm.addEventListener("click", () => {

});
WORDLENTtm.addEventListener("click", () => {

});

MAZEtm.addEventListener("click", () => {

});

Scratchesstm.addEventListener("click", () => {

});
