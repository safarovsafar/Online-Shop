let url=`http://localhost:3000/products`
let flesh=document.querySelector(".flesh")

export async function getFlesh(){
    try {
        let res=await fetch(url)
        let data=await res.json()
        fleshFunc(data)
    } catch (error) {
        console.error(error);
        
    }
}
let ArrOfProduct=[]
function fleshFunc(data){
     flesh.innerHTML=""

     data.forEach(product => {
        let card=document.createElement("div")
        card .classList.add("card1")
             
        let img=document.createElement("img")
        img.src=product.img;
        img.classList.add("img1")

        let name=document.createElement("h3")
        name.innerHTML=product.name;

        let btnAddToCart = document.createElement("button")
        btnAddToCart.innerText = 'Add to cart'
        btnAddToCart.classList.add('btnAddToCart')

        btnAddToCart.onclick=()=>
        {
            ArrOfProduct.push(product)
            console.log(ArrOfProduct);
            
            localStorage.setItem("cart",JSON.stringify(ArrOfProduct))
        }

        let info=document.createElement("span")
        info.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>`

        let like=document.createElement("span")
        like.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>` 
        card.append(img,name,info,like,btnAddToCart)
        info.onclick=()=>{
            localStorage.setItem("product1", JSON.stringify(product))
            window.location="http://127.0.0.1:5500/market/info/info.html"
        }
        flesh.append(card)
     });
}









let api=`http://localhost:3000/category`
let browse=document.querySelector(".browse")

export async function getBrowse(){
    try {
        let res=await fetch(api)
        let data=await res.json()
        browseFunc(data)
    } catch (error) {
        console.error(error);
        
    }
}

function browseFunc(data){
     browse.innerHTML=""

     data.forEach(categ => {
        let card=document.createElement("div")
        card.classList.add("card2")
        
        let img=document.createElement("img")
        img.src=categ.img;
        img.classList.add("img2")

        let name=document.createElement("h3")
        name.innerHTML=categ.name;

        card.append(img,name)
        browse.append(card)
     });
}