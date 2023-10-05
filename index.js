
const submitData= {  
    method:"POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    body:JSON.stringify(
       {
        userName:"mike",
        userEmail:"mike12345@gmail.com"
       } 
    )
}

fetch("http://localhost:3004/users", submitData)
.then(response=>response.json())
.then(user=>console.log(user))
.catch(error => {        
       const errorMessage = document.createElement("p");
        errorMessage.textContent = error.message;
       document.body.appendChild(errorMessage);
})

