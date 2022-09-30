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