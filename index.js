// Your code here
const dodger = document.getElementById("dodger");
// dodger.style.backgroundColor = '#ff69B4';
// dodger.style.bottom = '0px';
// dodger.style.left = '0px'
// document.addEventListener("keydown", function (event) {
//     console.log(event);
// });
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px", "");
        const left = parseInt(leftNumbers, 10);
        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
        }    
    }
    else if(event.key === "ArrowRight"){
        const leftNumbers = dodger.style.left.replace("px","");
        const left = parseInt(leftNumbers,10);
        const maxLeft = 360;
        if (left < maxLeft) {
            dodger.style.left = `${left + 1}px`;
        } 
    }
});


