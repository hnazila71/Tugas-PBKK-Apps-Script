const scriptURL = 'https://script.google.com/macros/s/AKfycbzq_-m3V4U4IfvHnI3ALG5KFe7z_EF2gTrbkKJ0NDwcx2CW0B5QKfMvykRkJLDQR_oW/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
 e.preventDefault()
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
