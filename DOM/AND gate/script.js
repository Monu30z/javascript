

let btn1 = document.querySelector(".bl1")
let btn2 = document.querySelector(".bl2")
let bulb = document.querySelector(".bulb")



    btn1.addEventListener("click", () => {
      btn1.classList.toggle("on");  // toggle bulb light
      if (btn1.classList.contains("on")) {
        btn1.innerHTML = "ON";
        blubOn()
      } else {
        btn1.innerHTML = "OFF";
        blubOff()
      }
    })

    btn2.addEventListener("click", () => {
      btn2.classList.toggle("on");  // toggle bulb light
      if (btn2.classList.contains("on")) {
        btn2.innerHTML = "ON";
        blubOn()
      } else {
        btn2.innerHTML = "OFF";
        blubOff()
      }
    })

    

    function blubOn(){
     if(btn1.innerHTML=="ON" && btn2.innerHTML== "ON" ){
        bulb.style.backgroundColor = "yellow";
    }
    }
    function blubOff(){
         if(btn1.innerHTML=="OFF" || btn2.innerHTML== "OFF" ){
        bulb.style.backgroundColor = "white";
    }
    }