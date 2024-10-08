const loginAsWdsBtn = document.getElementById('login-wds')
const loginAsKyleBtn = document.getElementById('login-kyle')
const loginAsJimBtn = document.getElementById('login-jim')
const adminBtn = document.getElementById('login-wds')
const responsesDiv = document.getElementById('responses')


loginAsWdsBtn.addEventListener('click',()=> {
  login("WDS")  
})
loginAsKyleBtn.addEventListener('click',()=> {
    login("Kyle")  
  })
  loginAsJimBtn.addEventListener('click',()=> {
    login("Jim")  
  })

  adminBtn.addEventListener('click',() => {
    fetch("http://localhost:3000/adminData", {
        credentials:"include",
        headers: {
            "Content-Type": "application/json",

        },

    }).then(res => res.text())
      .then(data => responsesDiv.textContent = data)
      .then(error => console.log('error:', error))
  })

  function login(username) {
    fetch("https://localhost:3000/login", {
        method: "get",
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
            "user" : JSON.stringify({ username })
         },
       
        }).then(res => res.text())
          .then(data => {
            responsesDiv.textContent = data;
            })
          .then(error => console.log('Error :', error))
        
  }