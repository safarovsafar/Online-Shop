let url=`http://localhost:3000/products`
let form=document.querySelector(".form")

let user=JSON.parse(localStorage.getItem("product"))






form["name"].value=user.name;
form["desc"].value=user.desc;
form["category"].value=user.category;
form["price"].value=user.price;
form["quantity"].value=user.quantity
let fileRes=null

form["file"].onchange=(e)=>{
    let file=e.target.files[0]
    let reader=new FileReader()

    reader.readAsDataURL(file)
    reader.onload=()=>{
        fileRes=reader.result
    }
    console.log(fileRes);
    
}






form.onsubmit=async(event)=>{
    event.preventDefault() 
    let edited={
        id:user.id,
        name:form["name"].value,
        img:fileRes,
        desc:form["desc"].value,
        category:form["category"].value,
        price:form["price"].value,
        quantity:form["quantity"].value
    }
    try {
        await fetch(`${url}/${user.id}`,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(edited)
        })
        window.location="../products/products.html"
     } catch (error) {
        console.error(error);
        
     }
}