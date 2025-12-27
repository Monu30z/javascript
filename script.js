// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let p =document.querySelector("p");
// console.log(p.getAttribute("class"));


// console.log(p.setAttribute("class","newclass"));



// let box = document.querySelector("#box");
// box.style.backgroundColor = "red";
// box.style.fontSize = "23px"




let box = document.querySelector("p");

let el = document.createElement("button");
el.innerText = "click me"

// box.append(el)
// box.prepend(el)

// box.before(el)

box.after(el)
console.log(el)

let heading = document.createElement("h1");
heading.innerHTML = "<i>hi, i am monu<i/>";

// box.before(heading);

document.querySelector("body").prepend(heading);

document.querySelector("p").remove();