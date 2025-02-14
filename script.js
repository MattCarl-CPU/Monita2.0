const alternatives = [
    {text:"", images:"images/primera foto.jpg"},
    {text:"Te prometo que será inolvidable", images:"images/9na foto.jpg"},
    {text:"Piénsalo de nuevo", images:"images/7ma foto.jpg"},
    {text:"Vamos, atrévete a un sí", images:"images/6ta foto.jpg"},
    {text:"Que el miedo no te detenga", images:"images/5ta foto.jpg"},
  ]
  const ohyes = {text:"Sabía que aceptarias, te prometo que será un día muy especial.", images:"images/10ma foto.jpg"}
  const cat = document.querySelector('.cat')
  const text = document.querySelector('.text')
  const buttons = document.querySelectorAll('.button')
  const errorButton = document.querySelector('.button__error')
  
  let count = 0;
  
  function updateDisplay(item){
    cat.src = item.images
    text.innerHTML = item.text
  }
  
  errorButton.addEventListener('click', ()=>{
    count = 0;
    updateDisplay(alternatives[count])
    buttons.forEach(btn => btn.style.display = 'inline-block')
    errorButton.style.display = 'none'
  })
  
  buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        if(button.textContent == "Si"){
            updateDisplay(ohyes)
            buttons.forEach(btn => btn.style.display = 'none')
        }
        if(button.textContent == 'No'){
            count++
            if(count < alternatives.length){
                updateDisplay(alternatives[count])
            }else{
                buttons.forEach(btn => btn.style.display = 'none')
                errorButton.style.display = 'inline-block'
            }
        }
    })
  })