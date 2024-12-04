let categories=document.querySelector(".categories")
let url=`http://localhost:3000/category`

export async function getCategories() {
    try {
        let res=await fetch(url)
        let data=await res.json()
        get(data) 
    } catch (error) {
        console.error(error);
        
    }
}
getCategories()

export function get(data){
    categories.innerHTML=""
    let all=document.createElement("p")
    all.innerHTML="All products"
    all.onclick=()=>{
        localStorage.setItem("catProduct",data)
        window.location="http://127.0.0.1:5500/categories/categor.html"
    }
    categories.append(all)
    data.forEach(e => {
        let text=document.createElement("p")
        text.innerHTML=e.name

        categories.append(text)
    });
}



let Days=document.querySelector(".Days")
let Hours=document.querySelector(".Hours")
let Minutes=document.querySelector(".Minutes")
let Seconds=document.querySelector(".Seconds")

var countDownDate = new Date("Jan 5, 2030 15:37:25").getTime();
let x = setInterval(function () {

    var now = new Date().getTime()

    var distance = countDownDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24)) - 1856
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 19;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    Days.innerHTML = days+":"
    Hours.innerHTML = hours+":"
    Minutes.innerHTML = minutes+":"
    Seconds.innerHTML = seconds
    if (distance < 0) {
        clearInterval(x)
        document.getElementById("demo").innerHTML = "EXPIRED"
    }
}, 1000);;


import { getFlesh } from "./app.js"
getFlesh()


import { getBrowse } from "./app.js"
getBrowse()









let imgSlayd=document.querySelector(".imgSlayd")
let cnt = 0  
setInterval(() => {  
    cnt++
    if (cnt == 3) {  
        imgSlayd.src = "https://avatars.mds.yandex.net/i?id=b2a17bb01dcf9ddb9ff299aa7019125312e02697-9035616-images-thumbs&n=13" 
    } 
    if (cnt == 6) {  
        imgSlayd.src = "https://avatars.mds.yandex.net/i?id=49b0d360ddaed8f8797733d8f54e0aca07fe73b2-4837721-images-thumbs&n=13" 
    }    
    if (cnt == 9) { 
        imgSlayd.src = "https://avatars.mds.yandex.net/i?id=9976f00f6091f4cd1db273382b75cd247516434b-3965927-images-thumbs&n=13" 
    } 
    if (cnt == 12) { 
        imgSlayd.src = "https://avatars.mds.yandex.net/i?id=bdb23426bbba23fd081f9bca6735feae3d2fa660-4963036-images-thumbs&n=13" 
        cnt = 0  
    }  
}, 1000);