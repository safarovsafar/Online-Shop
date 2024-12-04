let categories=document.querySelector(".categories")
let url=`http://localhost:3000/category`


 async function getCategories() {
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
    categories.append(all)
    data.forEach(e => {
        let text=document.createElement("p")
        text.innerHTML=e.name

        categories.append(text)
    });
}