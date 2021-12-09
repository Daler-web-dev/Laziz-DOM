let form = document.forms.register

form.onsubmit = () => {
    event.preventDefault()


    if(form.name.value.length === 0 && form.surname.value.length === 0) {
        form.name.style.backgroundColor = 'red'
        form.surname.style.backgroundColor = 'red'
    } else {
        let person = {}
    
        let newForm = new FormData(form)
    
        newForm.forEach((value, key) => {
            person[key] = value 
        })
        form.name.style.backgroundColor = 'green'
        form.surname.style.backgroundColor = 'green'
        console.log(person);
        form.name.value = ''
        form.surname.value = ''
    }

} 