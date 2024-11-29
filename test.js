
let container = document.querySelector(".container");
container.style.cssText = "display:flex; flex-direction:column;"
let all = document.querySelector(".all");
let small_container;
let test = document.querySelector(".test");

let createGrid = document.querySelector(".createGrid");
createGrid.addEventListener("click", () => {
    makeNew();
})


function randColor () {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}


function makeNew () {
    let dimensions = Number(prompt("Please enter size of new grid (1-100)"));
    if (dimensions >100) {
        alert("dimension provided is too large");
    } else if (dimensions < 1) {
        alert("dimensions provided is too small");
    } else if (dimensions >= 1 && dimensions<=100) {
        if (small_container) {
            container.removeChild(small_container);
        }
        
        grid(dimensions);
    }
    
}


function grid(n) {
    let l = 600/n;
    small_container = document.createElement("div");
    small_container.style.cssText = "display:flex; flex-direction:column; width: 600px; height: 600px";
    for (let i = 0; i<n; i++) {
        let row_div = document.createElement("div");
        row_div.style.cssText = "display:flex;"
        for (let k = 0; k<n; k++) {
            let mini_box = document.createElement("div");
            mini_box.style.cssText = ` height:${l}px; width:${l}px; background:grey; border-style:solid; border-width:1px; box-sizing:border-box;`;
            mini_box.style.opacity = "0.1"
            mini_box.addEventListener("mouseenter", () => {
                let opa = parseFloat(mini_box.style.opacity);
                mini_box.style.opacity = `${opa + 0.1}`
                mini_box.style.backgroundColor = randColor();
                
            })
            row_div.appendChild(mini_box);
        }
        small_container.appendChild(row_div);
    }
    container.appendChild(small_container);
    
}

grid(16);


