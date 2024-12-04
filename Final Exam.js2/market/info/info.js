let parent=document.querySelector(".parent")

let product1=JSON.parse(localStorage.getItem("product1"))

let photo=document.createElement("img")
photo.classList.add("photo")
photo.src=product1.img;

let names=document.createElement("h1")
names.innerHTML=product1.name;

let icons=document.createElement("img")
icons.src="../Frame 922.png"

let price=document.createElement("h1")
price.innerHTML="$"+product1.price;

let desc=document.createElement("p")
desc.innerHTML=product1.desc;

let color=document.createElement("h3")
color.innerHTML=product1.color

let img2=document.createElement("img")
img2.src="./Frame 911.png"

let buy=document.createElement("h4")
buy.classList.add("buy")
buy.innerHTML="Buy now"


// bought=[]
// buy.onclick=()=>{
//     bought.push(product1)
//     localStorage.setItem("cart",JSON.stringify(bought))
// }

let second=document.createElement("div")
second.append(names,icons,price,desc,color,buy,img2)
parent.append(photo,second)