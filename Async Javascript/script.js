
//?  sync and Async js kya hota hai
//  * sync matlab ek ke baad dusra hoga , jabtak ek command complete naa ho , dusra shuru nahi hoga 

// * asyn matlab sare kaam ke saath shuru kardo, jiska answer pahle aajaye uska jawaab dedena


//?  Kaise pata chalta hai ki hum sync code likh rahe ya async ?
// ! for async js                       for sync js
//*  setTimeout                        console.log("hii");
//*  setInterval                        console.log("hey1")
//*  Promise
//*  fetch
//*  axios 
//*  XMLHttpRequest


//? callbacks
// the catch
// async await


//? async js hai kya ?

//* kai baar aapke final code depanded hota hai kisi aue ke server par, is case mein mumein nahi pata ki anser uske server se kab laut kar aauega, to hum kya nahi kr skte is writing sync code, isse nipatne ke liya hum log async code likh dete hai taaki blockung naa ho and jab bhi anser aaye humare answer ke respect mein chalne waale code chal jaaye


// setTimeout(callback,timeinMs)
// console.log("Hey")
// setTimeout(function(){
//     console.log("hello world");
// },2000)

//? callbacks => functions
//* callback aak function hota hai, ye sirf tab chalta hai jab async code ka comlettion hojaata hai

// fetch(`https://facebook.com`)
// .then()



// var ans = new Promise((res,rej)=>{
//   if(true){
//     return res();
//   }
//   else{
//     return rej();
//   }
// })
// ans
//  .then(function() {
//     console.log("resove hogya tha");
    
//  })
//  .catch(function(){
//     console,log("reject hua tha");
//  })


// var ans = new Promise((res,rej)=>{
//     var n = Math.floor(Math.random()*10);
//     if(n<5){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })

// ans.then(function(){
//     console.log("below")
// })
// .catch(function(){
//     console.log("above");
// })

//?  var ans = new Promise(function(res,rej){
//     return res("sabse pahle ghar par aao");
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("gate khole aue gate lagao");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         console.log("Khana pakao kahana khao");
//      })
//     })

//  p3.then(function(data){
//     console.log(data);
    
// })
 


//? async await

//*  koi bhi esa function jisme aap async coce likhege, kyoki async code hai to aap promise ka istemaal kar sakte hai, ja  uska answer aayega aapko then logana padega, us **then** se bachne ke liye, aap async await ka istemmal kar sakte hai

//  function abcd(){
//     fetch(`https://randomuser.me/api/`)
//     .then(function(raw){
//         return raw.json();
//     })
//     .then(function(data){
//         console.log(data);
//     })
// }

// abcd();


async function abcd(){
   let raw = await fetch(`https://randomuser.me/api/`)
   let ans=  await raw.json();
   console.log(ans);
}   

abcd();

//* dekho jab bhi koi code async hai to aapko uske liye wait karna padta hai kyoki humein nahi pata uske answer kab aayega


//? 5 use case ekdum real world waale
//* node mein jab db
//* fetch
//* settimeout
//* setinterval

