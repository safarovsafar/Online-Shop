let url = `http://localhost:3000/users`
let form = document.querySelector(".form")
let cnt = 0


form.onsubmit = async (event) => {
    event.preventDefault()

    if (form["CPassword"].value == form["password"].value) {
        let user = {
            name: form["name"].value,
            password: form["password"].value,
            email: form["email"].value,
            phone: form["phone"].value
        }
        try {
            let response = await fetch(url)
            let data = response.json()
            console.log(data);
            
            data.forEach(el => {
                if (el.name == user.name) {
                    cnt++
                }
            });
        }
        catch (error) {
            console.error(error);

        }

        if (cnt == 1) alert(`This user already exists`)

        else {
            register(user)
            window.location = "../dashboard/dash.html"
        }
    }
    else {
        alert(`Password doesn't match
Confirm your password again`)
    }

}

async function register(user) {
    try {
         await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user),
        })
    } catch (error) {
        console.error(error);

    }
}

