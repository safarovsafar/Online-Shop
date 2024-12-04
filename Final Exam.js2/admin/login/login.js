let form=document.querySelector(".form")
let url=`http://localhost:3000/users`

form.onsubmit=async(event)=>{
   event.preventDefault()
    try {
        let response=await fetch(url)
        let data=await response.json()
        data.forEach(element => {
            if(form["name"].value==element.name && form["password"].value==element.password){
                window.location="../dashboard/dash.html"
            }
        });
    } catch (error) {
        
    }
}