let url=`http://localhost:3000/products`
let parent=document.querySelector(".parent")

async function getData() {
    try {
        let rea=await fetch(url)
        let data=await rea.json()
        get(data)
    } catch (error) {
        console.error(error);
        
    }
}
getData()

function get(data){
    parent.innerHTML=""

    data.forEach(element => {
        let tr=document.createElement("tr")

        let img=document.createElement("img")
        img.src=element.img;

        let product=document.createElement("sp")
        product.innerHTML=element.name
        
        let th=document.createElement("th")
        th.classList.add("th")
        th.append(img,product)

        let thSales=document.createElement("th")
        thSales.innerHTML="13123 sales"

        tr.append(th,thSales)
        parent.append(tr)
    });
}