
let container = document.querySelector(".container");
container.style.cssText = "display:flex; flex-direction:column;"


for (let i = 0; i<16; i++) {
    let row_div = document.createElement("div");
    row_div.style.cssText = "display:flex;"
    for (let k = 0; k<16; k++) {
        let mini_box = document.createElement("div");
        mini_box.style.cssText = "height:20px; width:20px; background:grey; border-style:solid; border-width:1px";
        row_div.appendChild(mini_box);
    }
    container.appendChild(row_div);
}


