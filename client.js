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
  })

  function login(username) {
    fetch("https://localhost:3000/login", {
        credentials:"include",
        headers: {
            "Content-Type": "application/json",
         },
         body : JSON.stringify({ username })
        }).then(res => res.text())
          .then(data => {
            responsesDiv.textContent = data;
          })
        
  }