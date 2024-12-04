let url=`http://localhost:3000/products`
let form=document.querySelector(".form")

let fileRes=null

form["file"].onchange=()=>{
    let files=form["file"].files[0]
    let reader=new FileReader()
    reader.readAsDataURL(files)
    reader.onload=()=>{
       fileRes=reader.result
    }
}

form.onsubmit=(event)=>{
    event.preventDefault()
    let product={
        "img": fileRes,
        "name": form["name"].value,
        "quantity": form["quantity"].value,
        "category": form["category"].value,
        "price":form["price"].value,
        "desc":form["desc"].value
    }

    adProduct(product)
    window.location="../products/products.html"
}


async function adProduct(product) {
    try {
        await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(product)
        })
    } catch (error) {
        console.error(error);
        
    }
}