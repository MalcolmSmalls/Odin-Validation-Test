const email = document.querySelector('#email')
email.addEventListener('input', function(e){
    if (email.validity.typeMismatch === false){
        email.setCustomValidity("")
        }else{
            email.setCustomValidity('Needs to be an e-mail address!')
            email.reportValidity()

        }
    }
)


const country = document.querySelector('#country')
country.addEventListener('input', function(e){
    let results = country.value.toLowerCase().replaceAll('.','')
    if (results === 'usa' || results === 'north america' || results === "the united states" || results === "the united states of america"){
        country.setCustomValidity("")
    }else{
        country.setCustomValidity('Must be from USA')
        country.reportValidity()
    }
})

const zip = document.querySelector('#zip')
zip.addEventListener('input', () => {
    if(zip.validity.tooLong === true || zip.validity.tooShort === true || isNaN(parseInt(zip.value)) === true){
        zip.setCustomValidity('Must be a valid zip code')
        zip.reportValidity()
    }else{
        zip.setCustomValidity("")
    }
})

const password = document.querySelector('#password')
password.addEventListener('input', () => {
    const notSpecial = /[^A-Za-z 0-9]/g
    if(password.validity.tooLong === true || password.validity.tooShort === true || notSpecial.test(password.value) === false ){
        password.setCustomValidity('Must be 6-10 characters and contain a special character')
        password.reportValidity()
    }else{
        password.setCustomValidity("")
    }
})

const confirmPassword = document.querySelector('#confirm')
confirmPassword.addEventListener('input', () => {
    if(confirmPassword.value !== password.value){
        confirmPassword.setCustomValidity('Must match password!')
        confirmPassword.reportValidity()
    }else{
        confirmPassword.setCustomValidity("")
    }
})

const submitBtn = document.querySelector('button')
submitBtn.addEventListener('click', () => {
    if(email.value === ""){
        email.setAttribute('required', 'true')
        if(zip.value === ""){
            zip.setAttribute('required', 'true')}
        if(password.value === ""){
            password.setAttribute('required', 'true')}
        if(confirmPassword.value === ""){
            confirmPassword.setAttribute('required', 'true') 
        }
    }else if(zip.value === ""){
        zip.setAttribute('required', 'true')
        if(password.value === ""){
            password.setAttribute('required', 'true')}
        if(confirmPassword.value === ""){
            confirmPassword.setAttribute('required', 'true') 
        }
    }else if(password.value === ""){
        password.setAttribute('required', 'true')
        if(confirmPassword.value === ""){
            confirmPassword.setAttribute('required', 'true') 
        }
    }else if(confirmPassword.value === ""){
        confirmPassword.setAttribute('required', 'true') 
    }
})