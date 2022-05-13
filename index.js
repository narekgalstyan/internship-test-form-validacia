let mail = document.getElementById('mail')
let mailValidetAndnotValided = document.getElementById('mailValidetAndnotValided')
let pasValidetAndnotValided = document.getElementById('pasValidetAndnotValided')
let password = document.getElementById('password')
let formErorText = document.getElementById('formErorText')
let formContiner = document.getElementById('form-continer')


  mail.addEventListener('keyup',function(){
    if(mail.value.includes("@")){
      mail.style.border = '2px solid green'
      mailValidetAndnotValided.innerText='validet'
      mailValidetAndnotValided.style.backgroundColor = 'green'
    }else{
      mail.style.border = '2px solid red'
      mailValidetAndnotValided.style.display = 'block'
    }
  })

  password.addEventListener('keyup',function(){
    mailValidetAndnotValided.style.display = 'none'
    let passLowerCaseAndUpperCase = password.value
    if(hasLowerCaseAndUpperCase(passLowerCaseAndUpperCase) && passLowerCaseAndUpperCase.length ===8){
      password.style.border = '2px solid green'
      pasValidetAndnotValided.innerText='validet'
      pasValidetAndnotValided.style.backgroundColor = 'green'
    }else{
      password.style.border = '2px solid red'
      pasValidetAndnotValided.style.display = 'block'
    } 
  })

  formContiner.addEventListener('submit',function(e){
    e.preventDefault()
    if(mail.value.length === 0 || password.value.length === 0){
      formErorText.style.display = 'block'
    }else{
      mailEror.innerText = ''
      pasValidetAndnotValided.style.display = 'none'
    }
  })

  function hasLowerCaseAndUpperCase(str) {
    return (/[a-z][A-Z]/.test(str));
  }
