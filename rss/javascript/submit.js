const scriptURL = 'https://script.google.com/macros/s/AKfycbyp0iIRJpaVTggA8fL46GDoqU1he2-fhE-vaUvg5ntBWWE_eu-zgebWzNu084Y55u0x/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById("mssag")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => 
        {
            message.innerHTML="Message Sent successfully"
            setTimeout(function(){
                message.innerHTML=""
            },5000)
            form.reset();
        })
      .catch(error => console.error('Error!', error.message))
  })