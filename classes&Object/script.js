// const student = {
//     fullName: "Monu Singh",
//     marks:76,
//     printMarks:function(){
//         console.log("Marks : ",this.mark)
//     },
// }

class MyClass{
    // name = "Monu Singh"
    constructor(brand){
        console.log("creating object")
        this.brand ="brand"
    }
    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brandName = brand;
    }
}

let p1 = new MyClass("fortuner");
// console.log(p1.name)
// p1.setBrand("fortuner")
p1.start();
p1.stop();