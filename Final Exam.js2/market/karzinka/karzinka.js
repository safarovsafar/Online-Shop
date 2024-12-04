let Cart = JSON.parse(localStorage.getItem("cart")) || [];  
let tbody = document.querySelector(".tbody");  
let cout = document.querySelector(".CouterOf"); 

let AllPrise=document.querySelector(".AllPrise")
let Total=document.querySelector(".Total")
function Couter() {
  cout.innerHTML =`${Cart.length}`
}

let cnt=0

function getUser(user) {
  let UnicalCard = {}; 
  user.forEach(element => {
    if (UnicalCard[element.id]) {
      UnicalCard[element.id].cnt += 1  
    } else {
      UnicalCard[element.id] = { ...element, cnt: 1 } 
    }
  })
  
  Object.values(UnicalCard).forEach(element => {
    let tr = document.createElement("tr")

    
    let TdAvatar = document.createElement("td")
    TdAvatar.classList.add("TdAvatar")
    TdAvatar.innerHTML = `<img style="width:40px" src="${element.img}" alt="">
                          <h1>${element.name}</h1>`

   
    let tdPrice = document.createElement("td")
    tdPrice.innerHTML = element.price+"$"

    
    let tdInp = document.createElement("td")
    let inp = document.createElement("input")
    inp.type = "number"
    inp.value = element.cnt  
    inp.min = 1
    tdInp.append(inp)

    
    let tdPriceAll = document.createElement("td");
    tdPriceAll.innerHTML = element.price * inp.value+"$"
    
     cnt+=element.price*inp.value
    
     console.log(cnt)
     
    
    let btnRemove = document.createElement("button")
    btnRemove.innerHTML = `<svg style="width:20px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>
`
    btnRemove.classList.add("btnRemove");


    btnRemove.onclick = () => {
      Cart = Cart.filter(item => item.id !== element.id)
      localStorage.setItem("cart", JSON.stringify(Cart))
      tbody.innerHTML = ""
      getUser(Cart)
      Couter()
    };
    inp.addEventListener("input", () => {
      tdPriceAll.innerHTML = element.price * inp.value
      Cart = Cart.map(item => {
        if (item.id === element.id) {
          item.cnt = +inp.value;  
        }
        return item;
      })
      localStorage.setItem("cart", JSON.stringify(Cart))
    })

    tr.append(TdAvatar, tdPrice, tdInp, tdPriceAll, btnRemove)
    tbody.append(tr);
  })
}


getUser(Cart);


function DobToCart(item) {
    
    let foundProduct = Cart.find(cart => cart.id === item.id);
    
    if (foundProduct) {
        foundProduct.cnt += 1; 
    } else {
        item.cnt = 1;  
        Cart.push(item);
    }
    
    
    localStorage.setItem("cart", JSON.stringify(Cart));
    Couter();
}


AllPrise.innerHTML=cnt+" $ "

Total.innerHTML=cnt+" $ "