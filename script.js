const colors = document.querySelectorAll('.color-box h2');
function generateColors(){
    colors.forEach((color) => {
        const randomNumber =Math.floor(Math.random()*16777215)
        const colorCode = "#"  +randomNumber.toString(16);
       color.style.backgroundColor =colorCode;
       color.innerHTML=colorCode;
    });
    
}
document.getElementById("btn").addEventListener(
    "click",
    generateColors
)

generateColors();